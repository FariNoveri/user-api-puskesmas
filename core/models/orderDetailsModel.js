const db = require('../config/db');

const getAllOrderDetails = async () => {
  const result = await db.query('SELECT * FROM order_details');
  return result.rows;
};

const createOrderDetail = async (order_id, obat_id, jumlah_obat) => {
  const result = await db.query(
    'INSERT INTO order_details (order_id, obat_id, jumlah_obat) VALUES ($1, $2, $3) RETURNING *',
    [order_id, obat_id, jumlah_obat]
  );
  return result.rows[0];
};

module.exports = { getAllOrderDetails, createOrderDetail };
