const mongoose = require('mongoose');
const env = require('dotenv').config();

const url = process.env.DB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('Mongoose connection error', error);
});
db.once('open', () => {
    console.log('Database connected');
});
