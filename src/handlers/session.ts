import pgConnect from 'connect-pg-simple';
import { Application } from 'express';
import session from 'express-session';

import { pool } from 'libs/pg';

import { dbConfig } from 'config/database';

const PgSession = pgConnect(session);

export default {
  init: (app: Application) => {
    app.use(session({
      store: new PgSession({ pool, tableName: 'session' }),
      secret: dbConfig.PG_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    }));
  },
};
