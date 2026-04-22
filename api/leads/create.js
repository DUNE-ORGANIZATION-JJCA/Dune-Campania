import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, source, campaign, consent } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requerido' });
    }

    const cleanEmail = email.trim().toLowerCase();

    const result = await sql`
      INSERT INTO leads (email, name, source, campaign, consent, ip, user_agent)
      VALUES (
        ${cleanEmail},
        ${name ?? null},
        ${source ?? null},
        ${campaign ?? null},
        ${Boolean(consent)},
        ${req.headers['x-forwarded-for'] ?? null},
        ${req.headers['user-agent'] ?? null}
      )
      ON CONFLICT (email) DO UPDATE
      SET consent = EXCLUDED.consent
      RETURNING id, email, created_at
    `;

    res.status(200).json({
      status: 'ok',
      lead: result[0],
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}