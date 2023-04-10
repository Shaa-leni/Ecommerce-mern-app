import { Router } from 'express';
// import { MongoClient } from 'mongodb';

import { getRecords, addRecords } from '../database/index.js';

const electronicsRoute = Router();

electronicsRoute.get('/list', async (req, res) => {
  const electronicsList = await getRecords('electronics');
  res.json({
    electronicsList,
  });
});

electronicsRoute.get('/:electronicsId', async (req, res) => {
  const {
    params: { electronicsId },
  } = req;
  const [electronics] = await getRecords('electronics', { 'id': electronicsId });
  res.json({
    electronics,
  });
});

electronicsRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('electronics', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});



export default electronicsRoute;