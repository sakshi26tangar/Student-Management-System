const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/student');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect('mongodb://127.0.0.1:27017/StudentDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection failed:', err.message));

app.use('/student', studentRoutes);

app.get('/', (req, res) => {
    res.redirect('/student');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
