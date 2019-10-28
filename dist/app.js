"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { app } from 'express'
var app = (0, _express["default"])();
app.get('/', function () {
  console.log('Home Page');
});
app.listen(3000, function () {
  console.log('Server started');
});