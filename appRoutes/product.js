import { Router } from 'express';

import { getRecords, addRecords } from '../database/index.js';

const productRoute = Router();

productRoute.get('/list', async (req, res) => {
  const productList = await getRecords('Products');
  res.json({
    productList,
  });
});

productRoute.get('/:productId', async (req, res) => {
  const {
    params: { productId },
  } = req;
  const [product] = await getRecords('Products', { 'id': productId });
  res.json({
    product,
  });
});

productRoute.post('/add', async (req, res) => {
  const { body } = req;
  console.log('hey post is working', body);
  const { insertedCount, insertedIds } = await addRecords('Products', body);

  res.json({
    message: 'success',
    insertedCount,
    insertedIds,
  });
});

// productRoute.get('/list', async (req, res) => {
//   console.log('helo world...');

//   const connect = await client.connect();
//   const db = connect.db(APP_DB_NAME);
//   const collect = db.collection('products');

//   const productList = await collect.find().toArray();
//   res.json({
//     productList,
//   });
// });

// productRoute.get('/:productId', async (req, res) => {
//   const {
//     params: { productId },
//   } = req;
//   console.log('helo world...productId ', productId);

//   const connect = await client.connect();
//   const db = connect.db(APP_DB_NAME);
//   const collect = db.collection('products');

//   const [product] = await collect.find({ 'id': productId }).toArray();
//   console.log('received the product.....', product);
//   res.json({
//     product,
//   });
// });

export default productRoute;
