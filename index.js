import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import coreRoute from './appRoutes/index.js';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = 3000 || process.env.APP_PORT;


const app = express();
app.use(cors());
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname ,"/frontend/build")))

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname ,"/frontend/build/index.html"))
})

app.use(coreRoute);

app.listen(PORT, () => {
  console.log(`local host started with port ${PORT}`);
});

