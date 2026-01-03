import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).send('Metodo no permitido');
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    const { name, email, message } = req.body;
    await sql('INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)', [name, email, message]);

    return res.redirect(303, '/index.html?success=true');
  } catch (error) {
    return res.status(500).json({ 
        error: 'Error de base de datos', 
        details: error.message 
    });
  }
}