const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/MongoDB-Social-Network-API';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
