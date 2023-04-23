import chai from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import bcrypt from 'bcryptjs';

import User from '../../../app/api/Database/Models/User';
import {app} from '../../../app/App';

import mockUser from '../../Mocks/user.mock';
import mockLogin from '../../Mocks/login.mock';
import mocksMessages from '../../Mocks/error.message.mock';
import Jwt from '../../../app/api/helpers/Jwt';

chai.use(chaiHttp);

const {expect} = chai;

const token = Jwt.createToken(mockUser.findOneReturn);

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

    it('POST /users: should return status 409 if email in body req, already exists in db', async () => {
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
  describe('Tests for PATCH /user', () => {
    it('PATCH /user: should return status 200 and updated user', async () => {
      Sinon.stub(bcrypt, 'hashSync').callsFake(() => '132465');
      Sinon.stub(User, 'findOne').resolves(mockUser.userUpdateReturn as User);
      Sinon.stub(User, 'update').resolves();
      const response = await chai
        .request(app)
        .patch('/user')
        .set('authorization', token)
        .send(mockUser.userUpdatePasswordAndCell);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');

      expect(response.body).to.have.deep.equal(mockUser.userUpdateReturn);
    });

    it('PATCH /user: should return status 409 if email in body req, already exists in db', async () => {
      Sinon.stub(User, 'findOne').resolves(mockUser.userUpdateReturn as User);

      const response = await chai
        .request(app)
        .patch('/user')
        .set('authorization', token)
        .send(mockUser.userUpdateEmail);

      expect(response.status).to.be.equal(409);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(
        mocksMessages.emailAlreadyExistsInDb
      );
    });

    it('PATCH /user: should return status 200 if nothing is send in body req', async () => {
      Sinon.stub(User, 'update').resolves();
      Sinon.stub(User, 'findOne').resolves(mockUser.userUpdateReturn as User);
      const response = await chai
        .request(app)
        .patch('/user')
        .set('authorization', token)
        .send({});

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mockUser.userUpdateReturn);
    });

    it('PATCH /user: should return status 401 if authorization header is invalid', async () => {
      const response = await chai
        .request(app)
        .patch('/user')
        .set('authorization', 'Bearer 123')
        .send({});

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidToken);
    });

    it('PATCH /user: should return status 407 if authorization header is miss', async () => {
      const response = await chai.request(app).patch('/user').send({});
      expect(response.status).to.be.equal(407);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.tokenMiss);
    });
  });

  describe('Tests for DELETE /user', () => {
    it('DELETE /user: should return status 200 and message', async () => {
      Sinon.stub(User, 'destroy').resolves();
      const response = await chai
        .request(app)
        .delete('/user')
        .set('authorization', token);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.userDeleted);
    });

    it('DELETE /user: should return status 401 if authorization header is invalid', async () => {
      const response = await chai
        .request(app)
        .delete('/user')
        .set('authorization', 'token');

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.deep.equal(mocksMessages.invalidToken);
    });
  });
});
