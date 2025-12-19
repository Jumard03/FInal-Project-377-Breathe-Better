const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
