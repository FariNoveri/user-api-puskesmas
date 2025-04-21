const db = require('../config/db');

const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM m_user');
  return result.rows;
};

const createUser = async (nama_lengkap, username, email, password, role_id, unit_layanan_id, photo) => {
  const result = await db.query(
    'INSERT INTO m_user (nama_lengkap, username, email, password, role_id, unit_layanan_id, photo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [nama_lengkap, username, email, password, role_id, unit_layanan_id, photo]
  );
  return result.rows[0];
};

module.exports = { getAllUsers, createUser };
