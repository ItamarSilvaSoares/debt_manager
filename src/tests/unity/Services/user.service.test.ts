import {expect} from 'chai';
import {describe, it} from 'mocha';
import Sinon from 'sinon';

import bcrypt from 'bcryptjs';

import User from '../../../app/api/Database/Models/User';

import mockUser from '../../Mocks/user.mock';
import mockLogin from '../../Mocks/login.mock';
import UserService from '../../../app/api/Services/user.service';
import Bcryptjs from '../../../app/api/helpers/Bcryptjs';
import {userMessages} from '../../../app/api/Utils/Constants';
import {IUpdateUser} from '../../../app/api/Interfaces/ICreate/ICreateUser';

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

  it('should call delete method and return a message', async () => {
    Sinon.stub(User, 'destroy').resolves();
    const result = await UserService.delete(mockUser.deleteUser as IUpdateUser);

    expect(result).to.be.equal(userMessages.deleteUser);
  });

  it('should return null when try delete a user without authorized', async () => {
    const result = await UserService.delete({});

    expect(result).to.be.null;
  });

  it('should return a error when try update a user with email  already registered', async () => {
    Sinon.stub(User, 'findOne').resolves(mockLogin.userInDb as User);

    try {
      await UserService.update(mockUser.userUpdateEmail as IUpdateUser);
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
      mockUser.userUpdatePasswordAndCell as IUpdateUser
    );

    expect(spy.calledOnce).to.be.true;
    expect(result).to.deep.equal(mockUser.userUpdateReturn);
  });

  it('should return null when try update a user without authorized', async () => {
    const result = await UserService.update(
      mockUser.userUpdateCellNotAllowed as IUpdateUser
    );

    expect(result).to.be.null;
  });
});
