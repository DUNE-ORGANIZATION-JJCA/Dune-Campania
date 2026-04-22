import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT NOW()`;
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}