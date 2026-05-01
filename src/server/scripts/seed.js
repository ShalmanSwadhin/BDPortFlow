const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/bdportflow', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedUsers = async () => {
  const users = [
    { name: 'Admin', email: 'admin@example.com', password: 'password' }
  ];

  for (const user of users) {
    const newUser = new User(user);
    await newUser.save();
  }

  console.log('Users seeded');
  mongoose.connection.close();
};

seedUsers();