import express from 'express';
import bodyParser from 'body-parser';
import dbConnection from './database';
import router from './Routes/employee-routes';

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use('/employee', router);
// dbConnection
dbConnection();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The Server is running on ${PORT}`);
});
