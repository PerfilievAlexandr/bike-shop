import { Application } from 'express';
import passport from 'passport';

export default {
  init: (app: Application) => {
    app.use(passport.initialize());
    app.use(passport.session());
  },
};
