import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';



const initMiddleWares = (app:Application) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};

export default initMiddleWares;
