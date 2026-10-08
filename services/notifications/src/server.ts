import express from 'express';
import { health, sendMessage } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/messages', sendMessage);
const port = Number(process.env.PORT || 8080);
app.listen(port);
