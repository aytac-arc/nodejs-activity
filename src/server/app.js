import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

var app = express();

import apiRoutes from './routes/api.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let routes = apiRoutes(app);

app.use('/*', (req, res, next) => {
  res.json({error: 'Unknown path'});
});

app.listen(3000, () => {
  console.log('Server running!');
});
