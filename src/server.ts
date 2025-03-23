import { create } from './controllers/initializer';

// Validación de seguridad: no iniciar si no hay API_KEY
if (!process.env.API_KEY) {
  throw new Error("❌ FALTA la variable de entorno API_KEY. Agrega una en Render > Environment.");
}

create({
  apiHost: '0.0.0.0', // necesario para que Render lo detecte
  apiPort: parseInt(process.env.PORT || '3000'), // Render asigna este puerto
  apiKey: process.env.API_KEY, // no expone la clave en código
  headless: true
});
