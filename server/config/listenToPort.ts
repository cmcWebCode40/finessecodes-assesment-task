import { Application } from 'express';

const PORT = process.env.PORT || 3001;

const listenToPort = (app:Application) => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

export default listenToPort;
