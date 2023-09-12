// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const validator = require('validator');
const config = require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(validator());

// Include your API routes
const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter);

// Undefined route (404)
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

const PORT = process.env.RUNNING_PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
