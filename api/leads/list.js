import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    const rows = await sql`
      SELECT * FROM leads
      ORDER BY created_at DESC
      LIMIT 20
    `;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}