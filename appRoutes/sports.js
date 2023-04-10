import { Router } from 'express';
// import { MongoClient } from 'mongodb';

import { getRecords, addRecords } from '../database/index.js';

const sportsRoute = Router();

sportsRoute.get('/list', async (req, res) => {
  const sportsList = await getRecords('sports');
  res.json({
    sportsList,
  });
});

sportsRoute.get('/:sportsId', async (req, res) => {
  const {
    params: { sportsId },
  } = req;
  const [sports] = await getRecords('sports', { 'id': sportsId });
  res.json({
    sports,
  });
});

sportsRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('sports', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});



export default sportsRoute;