const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Gateway = require('./helpers/gateway');
const validate = require('./helpers/validate');
const helper = require('./helpers/controllers/auth');

const fixtures = require('./fixtures/user');

const errorSchema = require('./schemas/error');
const loginSchema = require('./schemas/auth/login');

chai.should();
chai.use(chaiAsPromised);

describe('Auth controller', function() {

  before(() => helper.setup());

  after(() => helper.teardown());

  describe('login', function() {

    it('should return error if user does not exist', function() {
      return Gateway.login(fixtures.invalidUser())
        .should.be.rejected
        .then(validate(errorSchema('Invalid credentials')));
    });

    it('should return error if password is wrong', function() {
      const user = fixtures.validUser();

      user.password = 'wrong';

      return Gateway.login(user)
        .should.be.rejected
        .then(validate(errorSchema('Invalid credentials')));
    });

    it('should login successfully', function() {
      return Gateway.login(fixtures.validUser())
        .should.be.fulfilled
        .then(validate(loginSchema));
    });
  });
});
