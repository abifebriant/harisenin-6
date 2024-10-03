const { Pool } = require('pg');

// Konfigurasi koneksi ke PostgreSQL
const pool = new Pool({
  user: 'dbadmin',
  host: 'localhost',
  database: 'jokul_checkout',
  password: 'password',
  port: 5432, // default port PostgreSQL
});

// Fungsi untuk mendapatkan koneksi dari pool
const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};


