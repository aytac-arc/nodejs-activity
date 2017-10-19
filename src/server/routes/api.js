import menuApi from './menu-api.js';
import orderApi from './order-api.js';
import apisJson from '../data/apis.json'

export default (app) => {

  var menuRoutes = menuApi(app);
  var orderRotues = orderApi(app);

  app.get('/api/v1/', (req, res) => {
    res.json(apisJson);
  });

};
