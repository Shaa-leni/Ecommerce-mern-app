import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
// const APP_DB_URI= "mongodb+srv://Shaaleni:151299Sh@cluster0.mcznu7d.mongodb.net/?retryWrites=true&w=majority"
const uri = process.env.APP_DB_URI
const APP_DB_NAME = 'ProductandProductList';

const client = new MongoClient(uri);

const connect = async (collectionName) => {
  const connect = await client.connect();
  const db = connect.db(APP_DB_NAME);
  const collect = db.collection(collectionName);
  return collect;
};

//GETTING DATA FROM API
const getRecords = async (collectionName, matcher = {}) => {
  const dbCollection = await connect(collectionName);
  const productList = await dbCollection.find(matcher).toArray();
  return productList;
};

const addRecords = async (collectionName, newData) => {
  const dbCollection = await connect(collectionName);
  const { insertedCount, insertedIds } = await dbCollection.insertMany([
    newData,
  ]);

  return {
    insertedCount,
    insertedIds,
  };
};

export { getRecords, addRecords };