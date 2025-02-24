/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './config/database.js';
import router from './routes/employee.js';
import orgRouter from './routes/organization.js';

dotenv.config();

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/employee', router);
app.use('/organization', orgRouter);

// dbConnection
dbConnection();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The Server is running on ${PORT}`);
});
