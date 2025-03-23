const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/project_index.json');
  const raw = fs.readFileSync(filePath);
  const data = JSON.parse(raw);
  res.json(data);
});

module.exports = router;
