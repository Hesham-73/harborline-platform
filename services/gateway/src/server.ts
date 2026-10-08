import express from 'express';
import { health, ready, openSession } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.get('/ready', ready);
app.post('/sessions', openSession);
const port = Number(process.env.PORT || 8080);
app.listen(port);
