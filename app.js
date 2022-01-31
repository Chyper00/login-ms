require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const auth = require('./middleware/auth');

const routes = require('./routes');
const app = express();
const routeInstance = new routes()

app.use(express.json({ limit: '50mb' }));

app.get('/health', routeInstance.routeHealth);

app.post('/simpleRegister', routeInstance.routeSimpleRegister);

app.post('/register', routeInstance.routeRegister);

app.post('/login', routeInstance.routeLogin);

app.get('/welcome', auth, routeInstance.routeWelcome);

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

module.exports = app;
