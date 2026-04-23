import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const body = await request.json();
    const { email, consent, source, campaign } = body;

    if (!email) {
      return Response.json({ error: 'Email requerido' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO leads (email, consent, source, campaign)
      VALUES (${email}, ${consent}, ${source}, ${campaign})
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email
    `;

    if (result.length === 0) {
      return Response.json(
        { error: 'Este email ya está registrado' },
        { status: 409 }
      );
    }

    return Response.json({ status: 'ok', result });

  } catch (error: any) {
    console.error('ERROR:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}