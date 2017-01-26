const User = require('../models/user');

function login({ request }, callback) {
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
  login
};
