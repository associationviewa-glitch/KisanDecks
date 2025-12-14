const express = require("express");
const path = require("path");

const app = express();

// Cloud Run uses PORT env variable
const PORT = process.env.PORT || 8080;

// Serve frontend build files
app.use(express.static(path.join(__dirname, "dist")));

// Always return index.html (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ KisanDecks running on port ${PORT}`);
});
