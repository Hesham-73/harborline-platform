import express from 'express';
import { health, createCharge, createRefund } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/charges', createCharge);
app.post('/refunds', createRefund);
const port = Number(process.env.PORT || 8080);
app.listen(port);
