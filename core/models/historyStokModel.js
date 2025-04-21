const db = require('../config/db');

const getAllHistoryStok = async () => {
  const result = await db.query('SELECT * FROM history_stok_obat');
  return result.rows;
};

const createHistoryStok = async (obat_id, order_id, tanggal_masuk, tanggal_keluar, stok_baru, stok_awal, stok_akhir) => {
  const result = await db.query(
    'INSERT INTO history_stok_obat (obat_id, order_id, tanggal_masuk, tanggal_keluar, stok_baru, stok_awal, stok_akhir) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [obat_id, order_id, tanggal_masuk, tanggal_keluar, stok_baru, stok_awal, stok_akhir]
  );
  return result.rows[0];
};

module.exports = { getAllHistoryStok, createHistoryStok };
