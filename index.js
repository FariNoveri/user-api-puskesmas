const db = require('./config/db');

// Route ambil semua users
app.get('/api/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM m_users');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Route tambah user
app.post('/api/users', async (req, res) => {
  const { nama_user, email, password } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO m_users (nama_user, email, password) VALUES ($1, $2, $3) RETURNING *',
      [nama_user, email, password]
    );
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Database error' });
  }
});
