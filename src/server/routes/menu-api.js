import menuJson from '../data/menu.json';

export default (app) => {

  app.get('/api/v1/menu', (req, res) => {
    res.json(menuJson);
  });

}
