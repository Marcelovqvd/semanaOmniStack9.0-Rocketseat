const express = require('express');

const routes = express.Router();

reoutes.post('/users', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;