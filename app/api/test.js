import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  try {
    // 1. Crear tabla si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        name TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // 2. Insertar dato de prueba
    await sql`
      INSERT INTO test_table (name)
      VALUES ('test_' || NOW())
    `;

    // 3. Leer datos
    const data = await sql`
      SELECT * FROM test_table
      ORDER BY id DESC
      LIMIT 5
    `;

    res.status(200).json({
      status: 'ok',
      rows: data
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}