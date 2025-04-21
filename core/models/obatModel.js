const db = require('../config/db');

const getAllObats = async () => {
  const result = await db.query('SELECT * FROM m_obat');
  return result.rows;
};

const createObat = async (nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan) => {
  const result = await db.query(
    'INSERT INTO m_obat (nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    [nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan]
  );
  return result.rows[0];
};

module.exports = { getAllObats, createObat };
