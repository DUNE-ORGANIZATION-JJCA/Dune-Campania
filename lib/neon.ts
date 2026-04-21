import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.NEON_DATABASE_URL!);

export { sql };

export interface Session {
  id: string;
  session_id: string;
  created_at: Date;
  user_agent: string;
  ip_hash: string;
  country: string;
  city: string;
  device_type: string;
  browser: string;
  os: string;
  screen_width: number;
  screen_height: number;
  referrer: string;
  entry_page: string;
  time_on_site_seconds: number;
  pages_visited: number;
  is_bounce: boolean;
}

export interface Event {
  id: string;
  session_id: string;
  event_type: string;
  event_category: string;
  event_label: string;
  event_value: string;
  page_path: string;
  timestamp: Date;
  metadata: Record<string, unknown>;
}

export interface PageView {
  id: string;
  session_id: string;
  page_path: string;
  page_title: string;
  time_on_page_seconds: number;
  scroll_depth: number;
  exit_page: boolean;
  created_at: Date;
}

export interface Click {
  id: string;
  session_id: string;
  element_id: string;
  element_type: string;
  element_text: string;
  page_path: string;
  x_position: number;
  y_position: number;
  created_at: Date;
}

export async function createSession(sessionId: string, data: Partial<Session>): Promise<void> {
  await sql`
    INSERT INTO sessions (
      session_id, user_agent, ip_hash, country, city,
      device_type, browser, os, screen_width, screen_height,
      referrer, entry_page
    ) VALUES (
      ${sessionId}, ${data.user_agent || ''}, ${data.ip_hash || ''},
      ${data.country || ''}, ${data.city || ''}, ${data.device_type || ''},
      ${data.browser || ''}, ${data.os || ''}, ${data.screen_width || 0},
      ${data.screen_height || 0}, ${data.referrer || ''}, ${data.entry_page || ''}
    )
  `;
}

export async function trackEvent(sessionId: string, event: Partial<Event>): Promise<void> {
  await sql`
    INSERT INTO events (
      session_id, event_type, event_category, event_label,
      event_value, page_path, metadata
    ) VALUES (
      ${sessionId}, ${event.event_type || 'custom'},
      ${event.event_category || ''}, ${event.event_label || ''},
      ${event.event_value || ''}, ${event.page_path || '/'},
      ${JSON.stringify(event.metadata || {})}
    )
  `;
}

export async function trackPageView(sessionId: string, pageView: Partial<PageView>): Promise<void> {
  await sql`
    INSERT INTO page_views (
      session_id, page_path, page_title, time_on_page_seconds,
      scroll_depth, exit_page
    ) VALUES (
      ${sessionId}, ${pageView.page_path || '/'},
      ${pageView.page_title || ''}, ${pageView.time_on_page_seconds || 0},
      ${pageView.scroll_depth || 0}, ${pageView.exit_page || false}
    )
  `;
}

export async function trackClick(sessionId: string, click: Partial<Click>): Promise<void> {
  await sql`
    INSERT INTO clicks (
      session_id, element_id, element_type, element_text,
      page_path, x_position, y_position
    ) VALUES (
      ${sessionId}, ${click.element_id || ''}, ${click.element_type || ''},
      ${click.element_text || ''}, ${click.page_path || '/'},
      ${click.x_position || 0}, ${click.y_position || 0}
    )
  `;
}

export async function getDailyStats(): Promise<unknown> {
  const result = await sql`
    SELECT 
      date,
      unique_visitors,
      total_pageviews,
      total_clicks,
      bounce_rate,
      avg_time_on_site,
      top_pages
    FROM daily_stats
    ORDER BY date DESC
    LIMIT 30
  `;
  return result;
}
