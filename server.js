const express = require('express');
const path = require('path');

const app = express();
const PORT = 1; // 0001 port

// Static fayllarni serve qilish
app.use(express.static(path.join(__dirname, 'dist')));

// Bosh sahifani serve qilish
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Serverni ishga tushirish
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
