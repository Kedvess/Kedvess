export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, phi, ResG, note } = body || {};
    if (!name) return res.status(400).json({ ok: false, error: 'name required' });

    const node = {
      id: `n_${Date.now()}`,
      name,
      phi: phi != null ? Number(phi) : null,
      ResG: ResG != null ? Number(ResG) : null,
      note: note || '',
      ts: new Date().toISOString()
    };

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ ok: true, saved: false, node, hint: 'Persist via GitHub Action in future.' });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e) });
  }
}
