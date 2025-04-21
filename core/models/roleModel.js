const db = require('../config/db');

const getAllRoles = async () => {
  const result = await db.query('SELECT * FROM m_role');
  return result.rows;
};

const createRole = async (nama_role) => {
  const result = await db.query(
    'INSERT INTO m_role (nama_role) VALUES ($1) RETURNING *',
    [nama_role]
  );
  return result.rows[0];
};

module.exports = { getAllRoles, createRole };
