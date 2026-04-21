import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@neondatabase/serverless';

export async function GET(request: NextRequest) {
  try {
    if (!process.env.NEON_DATABASE_URL) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || '7';

    const result = await sql`
      SELECT 
        COUNT(DISTINCT session_id) as unique_visitors,
        COUNT(*) as total_pageviews,
        SUM(CASE WHEN is_bounce = TRUE THEN 1 ELSE 0 END) as bounces,
        AVG(time_on_site_seconds) as avg_time_on_site,
        COUNT(DISTINCT page_path) as unique_pages
      FROM sessions
      WHERE created_at >= NOW() - INTERVAL '${period} days'
    `;

    const topPages = await sql`
      SELECT 
        page_path,
        COUNT(*) as views
      FROM page_views
      WHERE created_at >= NOW() - INTERVAL '${period} days'
      GROUP BY page_path
      ORDER BY views DESC
      LIMIT 10
    `;

    const topClicks = await sql`
      SELECT 
        element_type,
        element_id,
        element_text,
        COUNT(*) as clicks
      FROM clicks
      WHERE created_at >= NOW() - INTERVAL '${period} days'
      GROUP BY element_type, element_id, element_text
      ORDER BY clicks DESC
      LIMIT 10
    `;

    const dailyData = await sql`
      SELECT 
        DATE(created_at) as date,
        COUNT(DISTINCT session_id) as visitors,
        COUNT(*) as pageviews
      FROM sessions
      WHERE created_at >= NOW() - INTERVAL '${period} days'
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `;

    return NextResponse.json({
      summary: result[0] || {},
      topPages: topPages,
      topClicks: topClicks,
      dailyData: dailyData
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}