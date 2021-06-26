import { Response, Request } from 'express';
import cloudinary from '../../config/cloudinary.config';


interface IParams extends Request {
  file: any;

}

export const uploadImage = async (req: IParams, res: Response) => {
  try {
    if (req.file && req.file.path) {
      const { secure_url: image } = await cloudinary.v2.uploader
        .upload(req.file.path, { folder: '/finessecodes' })
        .catch((err: any) => {
          throw err.error;
        });
      return res.send({ data: image });
    }
  } catch (error) {
    return res.status(400).send({ error })
  }
};

