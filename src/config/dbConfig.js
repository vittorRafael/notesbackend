//
const mongoose = require('mongoose');
const dbConfig =
  'mongodb+srv://rafael:kgTKAkFCwVfaZPpB@cluster0.sxzcuy8.mongodb.net/annotations?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
