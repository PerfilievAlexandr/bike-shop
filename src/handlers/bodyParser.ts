import { Application, json, urlencoded } from 'express';

export default {
  init: (app: Application) => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
  },
};
