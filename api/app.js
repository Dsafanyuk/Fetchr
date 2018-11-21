const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/index');

<<<<<<< Updated upstream
=======
const corsOptions = {
  origin: 'http://127.0.0.1:8080',
  credentials: true,
};

>>>>>>> Stashed changes
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< Updated upstream
app.use(cors());
=======
app.use(cors(corsOptions));
>>>>>>> Stashed changes

app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
  const err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
});
module.exports = app;
