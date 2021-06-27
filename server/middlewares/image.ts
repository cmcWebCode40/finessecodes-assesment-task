interface IFile {
  originalname:string;
}

export const fileFilter = (req:unknown, file:IFile, cb:Function) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  return cb(null, true);
};

