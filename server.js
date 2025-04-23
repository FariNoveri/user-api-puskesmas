const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import swaggerSpec dari swagger.js
const userRoutes = require('./routes/userRoutes'); // Pastikan file routes/userRoutes.js diimpor

// Middleware untuk JSON
app.use(express.json());

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Gunakan route untuk users
app.use('/users', userRoutes);  // Pastikan /users di-routing dengan userRoutes

// Routes lain
app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
  console.log('Swagger docs at http://localhost:3001/api-docs');
});
