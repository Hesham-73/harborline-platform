import express from 'express';
import { health, listProducts, readProduct } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.get('/products', listProducts);
app.get('/products/:sku', readProduct);
const port = Number(process.env.PORT || 8080);
app.listen(port);
