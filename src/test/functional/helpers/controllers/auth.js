const User = require('../../../../api/models/user');
const userFixture = require('../../fixtures/user');

class AuthHelper {

  setup() {

    var validUser = userFixture.validUser();

    return User.create({
      email: validUser.email,
      name: validUser.name,
      password: validUser.password,
      role: validUser.role
    });
  }

  teardown() {
    return User.truncate();
  }
}

module.exports = new AuthHelper();
