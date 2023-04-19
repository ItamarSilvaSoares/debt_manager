import chai from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import bcrypt from 'bcryptjs';

import User from '../../../app/api/Database/Models/User';
import app from '../../../app/App';

import mockUser from '../../Mocks/user.mock';
import mockLogin from '../../Mocks/login.mock';
import mocksMessages from '../../Mocks/error.message.mock';

chai.use(chaiHttp);

const {expect} = chai;

describe('Integration: User Controller', () => {
  afterEach(() => {
    Sinon.restore();
  });
  describe('Tests for POST /user', () => {
    it('POST /users: should create and return a new user and return status 201', async () => {
      Sinon.stub(User, 'findOne')
        .onCall(0)
        .resolves(null)
        .onCall(1)
        .resolves(mockUser.findOneReturn as User);
      Sinon.stub(bcrypt, 'hashSync').callsFake(() => '132465');
      Sinon.stub(User, 'create').resolves(mockLogin.userInDb as User);

      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUser);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mockUser.findOneReturn);
    });

    it('POST /users: should return status 409 if email in body req, already exists', async () => {
      Sinon.stub(User, 'findOne').resolves(mockUser.findOneReturn as User);

      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUser);

      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(
        mocksMessages.emailAlreadyExists
      );
    });

    it('POST /users: should return status 400 if email in body req is invalid', async () => {
      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUserInvalidEmail);

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidEmail);
    });

    it('POST /users: should return status 400 if username in body req is invalid', async () => {
      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUserInvalidUsername);

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidUsername);
    });

    it('POST /users: should return status 400 if password in body req is invalid', async () => {
      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUserInvalidPassword);

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidPassword);
    });

    it('POST /users: should return status 400 if cell in body req is invalid', async () => {
      const response = await chai
        .request(app)
        .post('/user')
        .send(mockUser.newUserInvalidCell);

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidCell);
    });
  });
  describe('Tests for PATCH /user', () => {});
});
