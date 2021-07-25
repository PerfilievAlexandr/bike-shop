import passport from 'passport';

import { IUser } from 'models/users';
import userRepo from 'repository/userRepo';

import localStrategy from './strategies/local';

passport.serializeUser((user: IUser, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await userRepo.findById(id);
  done(user);
});

passport.use(localStrategy);

export default passport;
