const mongoose = require('mongoose');

const { NODE_ENV, DEV_DB, PRO_DB } = process.env;

let dbUrl;

if (NODE_ENV === 'production') dbUrl = PRO_DB;
else dbUrl = DEV_DB;
console.log("monogo db URL: ", dbUrl);

if (!dbUrl) throw new Error('database url was not found');

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to database successfully'))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;