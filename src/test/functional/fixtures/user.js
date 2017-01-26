const factory = require('../factories/user');

module.exports = {
  userId: null,
  invalidUser: () => factory.createUser(this.userId, 'invalid', '5846816'),
  validUser: () => factory.createUser(this.userId, 'admin', '123456')
};
