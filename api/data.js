import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.NEON_DATABASE_URL!);
export default async function handler(req, res) {
  try {
    // Ejemplo: obtener todas las sesiones
    const sessions = await sql`SELECT * FROM sessions ORDER BY created_at DESC LIMIT 20`;
    
    // Contar eventos
    const eventCount = await sql`SELECT COUNT(*) as total FROM events`;
    const pageviewCount = await sql`SELECT COUNT(*) as total FROM page_views`;
    
    res.status(200).json({
      sessions: sessions,
      stats: {
        total_events: eventCount[0]?.total || 0,
        total_pageviews: pageviewCount[0]?.total || 0
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error conectando a la base de datos' });
  }
}
