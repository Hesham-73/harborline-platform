import express from 'express';
import { health, reserveStock, releaseStock } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/reservations', reserveStock);
app.delete('/reservations/:id', releaseStock);
const port = Number(process.env.PORT || 8080);
app.listen(port);
