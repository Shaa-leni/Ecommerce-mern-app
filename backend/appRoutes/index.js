import { Router } from 'express';
import productRoute from './product.js';
import outdoorRoute from './outdoor.js';
import travelRoute from './travel.js';
import sportsRoute from './sports.js';
import electronicsRoute from './electronics.js';
import healthRoute from './health.js';



const coreRoute = Router();

coreRoute.use('/product', productRoute);
coreRoute.use('/outdoor', outdoorRoute);
coreRoute.use('/travel', travelRoute);
coreRoute.use('/sports', sportsRoute);
coreRoute.use('/electronics', electronicsRoute);
coreRoute.use('/health', healthRoute);


// coreRoute.use('/cart', productRoute);
// coreRoute.use('/promotion', productRoute);

export default coreRoute;
