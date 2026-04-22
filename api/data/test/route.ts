import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  const client = await pool.connect();

  try {
    const result = await client.query('SELECT NOW()');
    return Response.json({ time: result.rows[0] });
  } finally {
    client.release();
  }
}