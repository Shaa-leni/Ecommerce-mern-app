import { Router } from 'express';
// import { MongoClient } from 'mongodb';

import { getRecords, addRecords } from '../database/index.js';

const healthRoute = Router();

healthRoute.get('/list', async (req, res) => {
  const healthList = await getRecords('health');
  res.json({
    healthList,
  });
});

healthRoute.get('/:healthId', async (req, res) => {
  const {
    params: { healthId },
  } = req;
  const [health] = await getRecords('health', { 'id': healthId });
  res.json({
    health,
  });
});

healthRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('health', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});



export default healthRoute;