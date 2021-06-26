import { fileFilter } from './../middlewares/image';
import multer from 'multer';
import { deleteImages } from '../controllers/imageUpload/deleteImages';
import { getImage } from '../controllers/imageUpload/getImages';
import { uploadImage } from '../controllers/imageUpload/imageUploader';

const router = require('express').Router();



import { storage } from './../utils/image';



const upload = multer({ storage });



router
  .get('/', getImage)
  .delete('/', deleteImages)
  .post(
    '/',
    upload.single('image'),
    uploadImage
);


export default router;
