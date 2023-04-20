import chai from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../../../app/api/Database/Models/User';
import {app} from '../../../app/App';

import mocksLogin from '../../Mocks/login.mock';
import mocksMessages from '../../Mocks/error.message.mock';

chai.use(chaiHttp);

const {expect} = chai;

describe('Integration: Login Controller', () => {
  afterEach(() => {
    Sinon.restore();
  });

  it('POST /login: should return a token and a status 200 when user is registered', async () => {
    Sinon.stub(User, 'findOne').resolves(mocksLogin.userInDb as User);
    Sinon.stub(bcrypt, 'compareSync').callsFake(() => true);
    Sinon.stub(jwt, 'sign').callsFake(() => 'token');

    const response = await chai
      .request(app)
      .post('/login')
      .send(mocksLogin.userInfosLogin);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.key('token');
  });

  it('POST /login: should return a status 400 when email is invalid', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(mocksLogin.userInfosLoginInvalidEmail);

    expect(response.body).to.be.deep.equal(mocksMessages.invalidEmail);
    expect(response.status).to.equal(400);
  });

  it('POST /login: should return a status 400 when password less than 6 characters', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send(mocksLogin.userInfosLoginInvalidPassword);

    expect(response.body).to.be.deep.equal(mocksMessages.invalidPassword);
    expect(response.status).to.equal(400);
  });

  it('POST /login: should return a status 401 when email is not registered', async () => {
    Sinon.stub(User, 'findOne').resolves(null);
    const response = await chai
      .request(app)
      .post('/login')
      .send(mocksLogin.userInfosLogin);

    expect(response.body).to.be.deep.equal(mocksMessages.invalidUser);
    expect(response.status).to.equal(401);
  });

  it('POST /login: should return a status 401 when password is invalid', async () => {
    Sinon.stub(User, 'findOne').resolves(mocksLogin.userInDb as User);
    Sinon.stub(bcrypt, 'compareSync').callsFake(() => false);
    const response = await chai
      .request(app)
      .post('/login')
      .send(mocksLogin.userInfosLoginPasswordIncorrect);

    expect(response.body).to.be.deep.equal(mocksMessages.invalidUser);
    expect(response.status).to.equal(401);
  });
});
