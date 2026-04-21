import { NextRequest, NextResponse } from 'next/server';
import { createSession, trackEvent, trackPageView, trackClick } from '@/lib/neon';

function getDeviceInfo(userAgent: string) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
  
  let deviceType = 'desktop';
  if (isMobile) deviceType = 'mobile';
  else if (isTablet) deviceType = 'tablet';

  let browser = 'Unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';

  let os = 'Unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';

  return { deviceType, browser, os };
}

function getSessionId(request: NextRequest): string {
  let sessionId = request.cookies.get('session_id')?.value;
  
  if (!sessionId) {
    sessionId = crypto.randomUUID();
  }
  
  return sessionId;
}

function hashIP(ip: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 64);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;
    
    const sessionId = getSessionId(request);
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { deviceType, browser, os } = getDeviceInfo(userAgent);
    
    const response = new NextResponse(JSON.stringify({ success: true, sessionId }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `session_id=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
      }
    });

    switch (type) {
      case 'session_start': {
        await createSession(sessionId, {
          user_agent: userAgent,
          ip_hash: hashIP(ip),
          device_type: deviceType,
          browser: browser,
          os: os,
          screen_width: data?.screenWidth,
          screen_height: data?.screenHeight,
          referrer: data?.referrer,
          entry_page: data?.entryPage || '/'
        });
        await trackEvent(sessionId, {
          event_type: 'session_start',
          page_path: data?.entryPage || '/'
        });
        break;
      }
      
      case 'page_view': {
        await trackPageView(sessionId, {
          page_path: data?.pagePath || '/',
          page_title: data?.pageTitle,
          time_on_page_seconds: data?.timeOnPage,
          scroll_depth: data?.scrollDepth,
          exit_page: data?.exitPage || false
        });
        break;
      }
      
      case 'click': {
        await trackClick(sessionId, {
          element_id: data?.elementId,
          element_type: data?.elementType,
          element_text: data?.elementText,
          page_path: data?.pagePath || '/',
          x_position: data?.x,
          y_position: data?.y
        });
        break;
      }
      
      case 'custom_event': {
        await trackEvent(sessionId, {
          event_type: data?.eventType || 'custom',
          event_category: data?.category,
          event_label: data?.label,
          event_value: data?.value,
          page_path: data?.pagePath || '/'
        });
        break;
      }
    }

    return response;
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const sessionId = getSessionId(request);
    return NextResponse.json({ sessionId });
  } catch (error) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}