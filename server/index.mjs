import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './db';
import { mountRoutes } from './routes';
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// create db connection and attach to req object
app.use(connect);

// mount async routes into main express app
mountRoutes(app);

app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
