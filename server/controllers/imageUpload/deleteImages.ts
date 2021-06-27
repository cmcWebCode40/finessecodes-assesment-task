import { Request, Response } from "express";
import cloudinary from "../../config/cloudinary.config";

interface IOverrideRequest extends Request {
  params: any
}

export const deleteImages = async (req: IOverrideRequest, res: Response) => {
  try {
    const {path, id} = req.params;
    const publicId = `${path}/${id}`;
    const data = await cloudinary.v2.uploader.destroy(publicId);
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}