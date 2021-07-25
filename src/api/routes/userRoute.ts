import { Application } from 'express';

import userController from 'api/controllers/userController';

const userRoute = (app: Application) => {
  app
    .post('/registration', userController.signUp)
    .post('/login', userController.signIn);
};

export default userRoute;
