const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

const sessionsRoute = require('./routes/sessions');
app.use('/api/sessions', sessionsRoute);

// Serve static assets (for screenshots, etc.)
app.use('/2025_Sessions', express.static(path.join(__dirname, '../data/2025_Sessions')));

// Serve the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
