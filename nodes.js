import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const file = path.join(process.cwd(), 'data', 'nodes.json');
    const json = fs.readFileSync(file, 'utf8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(json);
  } catch (e) {
    res.status(500).json({ ok: false, error: 'nodes.json not found' });
  }
}
