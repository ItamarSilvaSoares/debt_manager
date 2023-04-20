import 'dotenv/config';
import App from './App';

const PORT = process.env.APP_PORT || 3001;

App.start(PORT);
