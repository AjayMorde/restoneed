const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./connection/database');
const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();

// middleware
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// routes
app.use('/api/form', formRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

// db
sequelize.sync({ alter: true })
  .then(() => console.log('Database synced'))
  .catch(err => {
    console.error("DB ERROR:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
