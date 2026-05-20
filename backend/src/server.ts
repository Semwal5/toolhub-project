import express from 'express';
import { Queue } from 'bullmq';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

app.listen(port, () => {
  console.log(`Backend initialized and listening on port ${port}`);
});
