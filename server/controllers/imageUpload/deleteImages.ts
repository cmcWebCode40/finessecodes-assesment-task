import { Request, Response } from "express";
import cloudinary from "../../config/cloudinary.config";

interface IOverrideRequest extends Request {
  params: any
}

export const deleteImages = async (req: IOverrideRequest, res: Response) => {
  try {
    const data = await cloudinary.v2.uploader.destroy(req.body?.publicId);
    console.log(data);
    return res.send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}