interface IFile {
  originalname:string;
}

export const fileFilter = (req:Request, file:IFile, cb:any) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  return cb(null, true);
};

