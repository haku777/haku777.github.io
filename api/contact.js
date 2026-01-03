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
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!name || !email) {
        throw new Error("Faltan campos: name o email están vacíos");
    }

    await sql('INSERT INTO contact (name, email, message) VALUES ($1, $2, $3)', [name, email, message]);

    return res.redirect(303, '/index.html?success=true');
  } catch (error) {
    // ESTO ES CLAVE: Ahora el error te dirá EXACTAMENTE qué pasó
    return res.status(500).json({ 
        error: 'Error de base de datos', 
        details: error.message 
    });
  }
}