import { home } from '../controllers/home/home';

const router = require('express').Router();


router
  .get('/', home)


export default router;