import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../config/cloudinary.config";


interface IUploadImage extends NextApiRequest {
    file: any;
}


export const imageFilter = (req:any, file:any, cb:any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }

  return cb(null, true);
};


export const imageStorage = multer.diskStorage({
  filename(req:any, file:any, callback:any) {
    callback(null, Date.now() + file.originalname);
  },
});

const uploadImage = (folder = '/', imageName = 'image') => {
  return async ( req: IUploadImage,
  res: NextApiResponse,next:any) => {
    if (req.file && req.file.path) {
      const { secure_url: image } = await cloudinary.v2.uploader
        .upload(req.file.path, { folder })
        .catch((err) => {
          throw err.error;
        });
      req.body[imageName] = image;
    }
    next();
  };
};

export default uploadImage;

