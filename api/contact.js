import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).send('Metodo no permitido');
  }

  // Neon nos da una función directa para conectar con la URL de conexión
  // La URL la pegas desde tu panel de Neon (Connection String)
  const sql = neon('postgresql://neondb_owner:npg_NUzu8F4KSToW@ep-steep-hat-ad3atyfi-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require');

  try {
    const { name, email, message } = req.body;

    // Insertar datos de forma ultra sencilla
    await sql('INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)', [name, email, message]);

    // Redirigir al éxito
    return res.redirect(303, '../index.html');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al guardar en la base de datos' });
  }
}