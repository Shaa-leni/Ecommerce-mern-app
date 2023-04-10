import { Router } from 'express';
// import { MongoClient } from 'mongodb';

import { getRecords, addRecords } from '../database/index.js';

const outdoorRoute = Router();

outdoorRoute.get('/list', async (req, res) => {
  const outdoorList = await getRecords('outdoor');
  res.json({
    outdoorList,
  });
});

outdoorRoute.get('/:outdoorId', async (req, res) => {
  const {
    params: { outdoorId },
  } = req;
  const [outdoor] = await getRecords('outdoor', { 'id': outdoorId });
  res.json({
    outdoor,
  });
});

outdoorRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('outdoor', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});



export default outdoorRoute;