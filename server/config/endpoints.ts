import { Application } from 'express';
import notFound from '../middlewares/404routes';
import imageUploader from '../routes/imageUploader.routes'
import home from '../routes/home.routes'




const apiEndpoint = (app:Application ) => {
  app.use('/api', home);
  app.use('/api/cloudinary', imageUploader);
  app.use(notFound);
};

export default apiEndpoint;
