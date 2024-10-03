const express = require('express');
const db = require('./db'); // Import koneksi database
const app = express();
const port = 3000;

app.use(express.json()); // Middleware untuk parsing JSON

// GET: Mendapatkan semua tutor dari PostgreSQL
app.get('/tutor-list', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM kelas');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// GET: Mendapatkan tutor berdasarkan ID dari PostgreSQL
app.get('/tutor-list/:id', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM kelas WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tutor not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// POST: Menambahkan tutor baru ke PostgreSQL
app.post('/tutor-list', async (req, res) => {
    try {
        const { id,tutor_name, harga } = req.body;
        const result = await db.query(
            'INSERT INTO kelas (id,tutor_name, harga) VALUES ($1, $2,$3) RETURNING *',
            [id,tutor_name, harga]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// PATCH: Mengupdate tutor berdasarkan ID di PostgreSQL
app.patch('/tutor-list/:id', async (req, res) => {
    try {
        const { tutor_name, harga } = req.body;
        const result = await db.query(
            'UPDATE kelas SET tutor_name = $1, harga = $2 WHERE id = $3 RETURNING *',
            [tutor_name, harga, req.params.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Tutor not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// DELETE: Menghapus tutor berdasarkan ID di PostgreSQL
app.delete('/tutor-list/:id', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM kelas WHERE id = $1 RETURNING *', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Tutor not found');
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
