import express, {
  Application,
} from 'express';
import dotenv from 'dotenv';
import apiEndpoint from './config/endpoints';
import initMiddleWares from './config/initMiddlewares';
import listenToPort from './config/listenToPort';

dotenv.config();

const app: Application = express();

const initializeServer = async ():Promise<void> => {
  initMiddleWares(app);
  apiEndpoint(app);
  listenToPort(app);
};

initializeServer();
