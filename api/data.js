import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL!);
export default async function handler(req, res) {
  try {
    // Verificar que la variable existe
    if (!process.env.DATABASE_URL) {
      return res.status(500).json({ error: 'Variable DATABASE_URL no configurada' });
    }
    
    // Probar conexión simple
    const result = await sql`SELECT 1 as test`;
    
    res.status(200).json({ 
      message: 'Conexión exitosa',
      test: result 
    });
  } catch (error) {
    console.error('Error detallado:', error);
    res.status(500).json({ 
      error: 'Error conectando a la base de datos',
      details: error.message 
    });
  }
}
