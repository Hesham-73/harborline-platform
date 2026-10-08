import express from 'express';
import { health, searchCatalog } from './handlers';
const app = express();
app.use(express.json());
app.get('/health', health);
app.get('/search', searchCatalog);
const port = Number(process.env.PORT || 8080);
app.listen(port);
