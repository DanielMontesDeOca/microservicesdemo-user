const User = require('../models/user');

function createUser({ request }, callback) {
  const name = request.name;
  const email = request.email;
  const password = request.password;
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

function getUser({ request }, callback) {
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

module.exports = {
  createUser,
  getUser
};
