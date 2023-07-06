import express, { Express } from 'express';
import bodyParser from 'body-parser';
import abhijeetRoute from './Routes/abhijeet';
import sankalpRoute from './Routes/sankalp';
import deepanshuRoute from './Routes/deepanshu';

import dotenv from 'dotenv';

dotenv.config();

const port: number | string = rocess.env.PORT || 3000;

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(abhijeetRoute);
app.use(sankalpRoute);
app.use(deepanshuRoute);

app.listen(port, () => {
  console.log(`Server is running on port 3000`);
});
