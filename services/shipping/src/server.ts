import express from 'express';
import { health, createShipment, readShipment } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/shipments', createShipment);
app.get('/shipments/:id', readShipment);
const port = Number(process.env.PORT || 8080);
app.listen(port);
