import express from 'express';
import { health, openCart, submitCart } from './handlers';
import { OrderId } from '../../../packages/contracts/src/ids';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/carts', openCart);
app.post('/carts/:id/submit', submitCart);
const sample: OrderId = 'ord_sample';
void sample;

const port = Number(process.env.PORT || 8080);
app.listen(port);
