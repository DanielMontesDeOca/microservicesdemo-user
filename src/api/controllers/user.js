const User = require('../models/user');

function create({ request }, callback) {
  const name = request.name;
  const email = request.credentials.email;
  const password = request.credentials.password;
  const role = 'user';
  const data = { name, email, password, role };

  User.create(data)
    .then(function(user) {
      callback(null, {
        id: user.id,
        name,
        email,
        role
      });
    })
    .catch(callback);
}

function get({ request }, callback) {
  const id = request.id;

  User.find({id})
    .then(user => {
      if (!user) {
        throw new Error('User not found');
      }

      callback(null, {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    })
    .catch(callback);
}

function validateCredentials({ request }, callback) {
  const email = request.email;
  const password = request.password;

  User.find({ email, password })
    .then(function(user) {
      if (!user) {
        throw new Error('Invalid credentials');
      }

      callback(null, {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    })
    .catch(callback);
}

module.exports = {
  create,
  get,
  validateCredentials
};
