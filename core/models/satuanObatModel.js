const db = require('../config/db');

const getAllSatuanObats = async () => {
  const result = await db.query('SELECT * FROM m_satuan_obat');
  return result.rows;
};

const createSatuanObat = async (nama_satuan) => {
  const result = await db.query(
    'INSERT INTO m_satuan_obat (nama_satuan) VALUES ($1) RETURNING *',
    [nama_satuan]
  );
  return result.rows[0];
};

module.exports = { getAllSatuanObats, createSatuanObat };
