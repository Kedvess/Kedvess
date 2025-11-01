import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const file = path.join(process.cwd(), 'data', 'nodes.json');
    const jsonData = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(jsonData);

    res.status(200).json({ ok: true, data });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Eroare la citirea nodurilor', error: error.message });
  }
}
