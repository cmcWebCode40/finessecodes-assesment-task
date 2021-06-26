import { Request, Response } from "express";
import cloudinary from "../../config/cloudinary.config";

interface IRequestOverrides extends Request {
  file: any;
}

export const getImage = async (req: IRequestOverrides, res: Response) => {
  try {
   const data =await cloudinary.v2.search.expression(
      'finessecodes/*'
    ).sort_by('public_id', 'desc').max_results(30).execute();
     res.status(200).send({ data })
  } catch (error) {
    res.status(400).send({ error })
  }
};
