import express from 'express';

import bodyParser from 'handlers/bodyParser';
import passport from 'handlers/passport';
import session from 'handlers/session';

import userRoute from 'api/routes/userRoute';

const app = express();

session.init(app);
bodyParser.init(app);
passport.init(app);

userRoute(app);

export default app;
