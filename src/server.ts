import { create } from './controllers/initializer';

create({
  apiHost: '0.0.0.0',
  apiPort: parseInt(process.env.PORT || '3000'),
  apiKey: process.env.API_KEY || '1234',
  headless: true
});
