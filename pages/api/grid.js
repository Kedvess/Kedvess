// pages/api/grid.js
export default function handler(req, res) {
  res.status(200).json({
    version: "CRYSTAL_V9.8",
    Δstatus: "LIVE",
    timestamp: new Date().toISOString(),
    message: "Node grid connected successfully 🔮",
    node_sync: true
  });
}
