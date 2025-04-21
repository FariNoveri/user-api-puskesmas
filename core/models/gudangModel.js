const db = require('../config/db');

const getAllGudang = async () => {
  const result = await db.query('SELECT * FROM m_gudang');
  return result.rows;
};

const createGudang = async (nama_gudang, lokasi, kode_gudang) => {
  const result = await db.query(
    'INSERT INTO m_gudang (nama_gudang, lokasi, kode_gudang) VALUES ($1, $2, $3) RETURNING *',
    [nama_gudang, lokasi, kode_gudang]
  );
  return result.rows[0];
};

module.exports = { getAllGudang, createGudang };
