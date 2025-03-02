const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;


mongoose.connect(mongo_url)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Failed to connect to the database', err);
  });


const db = mongoose.connection;
