const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: "1.0.0",
    title: "API Debt Manger",
    description: "Esta documentação é destinada ao projeto Debt Manger"
  },
  host: `localhost:${process.env.APP_PORT || 3001}`,
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
        "name": "User",
        "description": "Endpoints"
    },
    {
      "name": "Login",
      "description": "Endpoints"
    }
],
  definitions: {
    LoginUser: {
      $email: "John@email.com",
      $password: "password"
    },
    Token:{
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiSm9obiBEb2Ui"
    },
    User: {
      id: 1,
      username: "John Doe",
      email: "John@email.com",
      cell: "18991234567",
    },
    AddUser: {
      $username: "John Doe",
      $email: "John@email.com",
      $cell: "18991234567",
      $password: "password"
    },
    ConflictUser: {
      message: "User already registered"
    },
    NotFoundUser: {
      message: "User not found"
    },
    BadRequest: {
      message: "Something is wrong in the Body Request"
  },
    Unauthorized: {
      message: "Email or password invalid"
    }
  },
    

}

const outputFile = './swagger-output.json'
const endpointsFiles = [
  './dist/src/app/api/Routes/userRouter.js',
  './dist/src/app/api/Routes/loginRouter.js',
]

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./dist/src/app/App.js');         // Your project's root file
})
