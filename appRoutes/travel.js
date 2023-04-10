import { Router } from 'express';
// import { MongoClient } from 'mongodb';

import { getRecords, addRecords } from '../database/index.js';

const travelRoute = Router();

travelRoute.get('/list', async (req, res) => {
  const travelList = await getRecords('travel');
  res.json({
    travelList,
  });
});

travelRoute.get('/:travelId', async (req, res) => {
  const {
    params: { travelId },
  } = req;
  const [travel] = await getRecords('travel', { 'id': travelId });
  res.json({
    travel,
  });
});

travelRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('travel', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});



export default travelRoute;