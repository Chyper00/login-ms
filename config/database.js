const mongoose = require('mongoose');

const uri = 'mongodb+srv://adm:adm@cluster0.1vb9y.mongodb.net/Cluster0?retryWrites=true&w=majority';

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};
