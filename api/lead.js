export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, type, fecha, hora, ciudad, timestamp } = req.body;
  if (!email) return res.status(400).json({ error: 'Missing email' });

  console.log(JSON.stringify({
    event: 'lead_captured',
    type: type || 'unknown',
    name: name || '',
    email,
    fecha: fecha || '',
    hora: hora || '',
    ciudad: ciudad || '',
    timestamp: timestamp || new Date().toISOString(),
  }));

  return res.status(200).json({ ok: true });
}
