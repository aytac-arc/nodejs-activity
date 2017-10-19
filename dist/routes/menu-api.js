'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('../data/menu.json');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

  app.get('/api/v1/menu', function (req, res) {
    res.json(_menu2.default);
  });
};