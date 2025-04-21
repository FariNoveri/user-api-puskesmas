const db = require('../config/db');

const getAllOrders = async () => {
  const result = await db.query('SELECT * FROM trn_order');
  return result.rows;
};

const createOrder = async (unit_layanan_id, user_id, tgl_order, status, jam_order) => {
  const result = await db.query(
    'INSERT INTO trn_order (unit_layanan_id, user_id, tgl_order, status, jam_order) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [unit_layanan_id, user_id, tgl_order, status, jam_order]
  );
  return result.rows[0];
};

module.exports = { getAllOrders, createOrder };
