import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import coreRoute from './appRoutes/index.js';

const APP_PORT = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());



// app.use(express.static(path.join(__dirname + "/frontend/build")))

// app.get('/*',function(req,res){
//   res.sendFile(path.join(__dirname + "/frontend/build/index.html"))
// })

app.use(coreRoute);

app.listen(APP_PORT, () => {
  console.log(`local host started with port ${APP_PORT}`);
});

