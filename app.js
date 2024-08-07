const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

app.get('/api/credentials', (req, res) => {
    res.json({
        apiKey: process.env.API_KEY,
        apiSecret: process.env.API_SECRET
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});