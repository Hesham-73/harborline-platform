import express from 'express';
import { health, reviewOrder } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/reviews', reviewOrder);
const port = Number(process.env.PORT || 8080);
app.listen(port);
