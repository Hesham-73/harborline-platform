import express from 'express';
import { health, storeAsset } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.post('/assets', storeAsset);
const port = Number(process.env.PORT || 8080);
app.listen(port);
