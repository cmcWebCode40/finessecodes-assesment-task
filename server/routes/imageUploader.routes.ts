import { fileFilter } from './../middlewares/image';
import multer from 'multer';
import { deleteImages } from '../controllers/imageUpload/deleteImages';
import { getImage } from '../controllers/imageUpload/getImages';
import { uploadImage } from '../controllers/imageUpload/imageUploader';
import { storage } from './../utils/image';

const router = require('express').Router();


const upload = multer({ storage,fileFilter });


router
  .get('/', getImage)
  .delete('/:path/:id', deleteImages)
  .post('/',upload.single('image'),uploadImage);


export default router;
