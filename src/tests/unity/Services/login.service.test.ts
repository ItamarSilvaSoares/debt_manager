import {expect} from 'chai';
import {describe, it} from 'mocha';
import Sinon from 'sinon';

import LoginService from '../../../app/api/Services/login.service';

import mock from '../../Mocks/login.mock';

import AContractJWT from '../../../app/api/helpers/Jwt';
import User from '../../../app/api/Database/Models/User';

describe('Test the service Login', () => {
  afterEach(() => {
    Sinon.restore();
  });

  it('should return a token correctly', async () => {
    Sinon.stub(User, 'findOne').resolves(mock.userInDb as User);

    const result = await LoginService.login(mock.userInfosLogin);

    const payload = await AContractJWT.verifyToken(result);

    expect(payload).to.have.property('username').and.to.be.a('string');
    expect(payload).to.have.property('username').and.to.be.equal('User');
    expect(payload).to.have.property('email').and.to.be.a('string');
    expect(payload).to.have.property('email').and.to.be.equal('user@user.com');
    expect(payload).to.have.property('cell').and.to.be.a('string');
    expect(payload).to.have.property('cell').and.to.be.equal('123456789');
    expect(payload).to.have.property('id').and.to.be.a('number');
    expect(payload).to.have.property('id').and.to.be.equal(1);
    expect(payload).to.not.have.property('password');
  });

  it('should return a error if the user is not found', async () => {
    Sinon.stub(LoginService, 'findOne').resolves(null);

    try {
      await LoginService.login(mock.userInfosLoginInvalidEmail);
    } catch (error) {
      expect(error.message).to.be.equal('Email or password invalid');

      expect(Number(error.stack)).to.be.equal(401);
    }
  });

  it('should return a error if the password is incorrect', async () => {
    Sinon.stub(LoginService, 'findOne').resolves(mock.userInDb as User);
    try {
      await LoginService.login(mock.userInfosLoginInvalidPassword);
    } catch (error) {
      expect(error.message).to.be.equal('Email or password invalid');

      expect(Number(error.stack)).to.be.equal(401);
    }
  });
});
