import express from 'express';
import { health, issueInvoice } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/invoices', issueInvoice);
const port = Number(process.env.PORT || 8080);
app.listen(port);
