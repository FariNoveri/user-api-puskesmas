const db = require('../config/db');

const getAllUnitLayanans = async () => {
  const result = await db.query('SELECT * FROM m_unit_layanan');
  return result.rows;
};

const createUnitLayanan = async (unit_layanan, keterangan) => {
  const result = await db.query(
    'INSERT INTO m_unit_layanan (unit_layanan, keterangan) VALUES ($1, $2) RETURNING *',
    [unit_layanan, keterangan]
  );
  return result.rows[0];
};

module.exports = { getAllUnitLayanans, createUnitLayanan };
