import express from 'express';
import { health, issueToken, readCustomer } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/tokens', issueToken);
app.get('/customers/:id', readCustomer);
const port = Number(process.env.PORT || 8080);
app.listen(port);
