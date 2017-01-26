const Model = require('./model');

const User = new Model();

User.create({
  id: '1',
  name: 'Admin',
  email: 'admin@email.com',
  role: 'admin',
  password: '123456'
});

module.exports = User;
