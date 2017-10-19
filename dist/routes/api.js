'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuApi = require('./menu-api.js');

var _menuApi2 = _interopRequireDefault(_menuApi);

var _orderApi = require('./order-api.js');

var _orderApi2 = _interopRequireDefault(_orderApi);

var _apis = require('../data/apis.json');

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

  var menuRoutes = (0, _menuApi2.default)(app);
  var orderRotues = (0, _orderApi2.default)(app);

  app.get('/api/v1/', function (req, res) {
    res.json(_apis2.default);
  });
};