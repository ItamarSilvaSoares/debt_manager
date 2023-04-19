import {expect} from 'chai';
import {describe, it} from 'mocha';
import Sinon from 'sinon';

import bcrypt from 'bcryptjs';

import User from '../../../app/api/Database/Models/User';

import mockUser from '../../Mocks/user.mock';
import mockLogin from '../../Mocks/login.mock';
import UserService from '../../../app/api/Services/user.service';
import Bcryptjs from '../../../app/api/helpers/Bcryptjs';

describe('Test User service', () => {
  afterEach(() => {
    Sinon.restore();
  });

  it('Should create a user correctly', async () => {
    Sinon.stub(User, 'findOne')
      .onCall(0)
      .resolves(null)
      .onCall(1)
      .resolves(mockUser.findOneReturn as User);
    Sinon.stub(bcrypt, 'hashSync').callsFake(() => '13246');

    Sinon.stub(User, 'create').resolves(mockLogin.userInDb as User);

    const result = await UserService.create(mockUser.newUser);

    expect(result).to.deep.equal(mockUser.findOneReturn);
  });

  it('Should return a error if user already exists', async () => {
    Sinon.stub(User, 'findOne').resolves(mockLogin.userInDb as User);

    try {
      await UserService.create(mockUser.newUser);
    } catch (error) {
      expect(error.message).to.be.equal('User already registered');

      expect(Number(error.stack)).to.be.equal(409);
    }
  });

  it('should call delete method', async () => {
    const spy = Sinon.spy(User, 'destroy');
    await UserService.delete(1);

    expect(spy.calledOnce).to.be.true;
  });

  it('should return a error when try update a user with email  already registered', async () => {
    Sinon.stub(User, 'findOne').resolves(mockLogin.userInDb as User);

    try {
      await UserService.update(mockUser.userUpdateEmail, 1);
    } catch (error) {
      expect(error.message).to.be.equal('Invalid Email');

      expect(Number(error.stack)).to.be.equal(409);
    }
  });

  it('should return a user with updated data when try update a user', async () => {
    Sinon.stub(User, 'findOne').resolves(mockUser.userUpdateReturn as User);
    Sinon.stub(bcrypt, 'hashSync').callsFake(() => '13246');
    Sinon.stub(User, 'update').resolves();
    const spy = Sinon.spy(Bcryptjs, 'getHash');

    const result = await UserService.update(
      mockUser.userUpdatePasswordAndCell,
      1
    );

    expect(spy.calledOnce).to.be.true;
    expect(result).to.deep.equal(mockUser.userUpdateReturn);
  });
});
