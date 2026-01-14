require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const sequelize = require('./connection/database');
const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
app.use(helmet());


app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/form', formRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
