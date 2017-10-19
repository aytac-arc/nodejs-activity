import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import dotenv from 'dotenv';

import apiRoutes from './routes/api.js';

dotenv.load();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let routes = apiRoutes(app);

app.use('/*', (req, res, next) => {
  res.json({error: 'Unknown path'});
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}!`);
});
