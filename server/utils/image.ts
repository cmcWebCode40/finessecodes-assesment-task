import {  Request } from 'express';
import multer from 'multer';

interface IFile {
  originalname:string;
}
export const storage = multer.diskStorage({
  filename(req:Request, file:IFile, callback:Function) {
    // callback(null, Date.now() + file.originalname);
    callback(null, true);
  }
});