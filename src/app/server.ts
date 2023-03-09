import 'dotenv/config';
import app from './App';

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(PORT, () =>
  console.log(`Server is running on PORT: ${PORT}`)
);

export default server;
