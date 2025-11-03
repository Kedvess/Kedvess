// /api/deltaF.js – Kedvess Grid V13.04 LIVE
export default function handler(req, res) {
  res.status(200).json({
    deltaF: 0.00005,
    phi: 1.618,
    timestamp: Date.now()
  });
}
