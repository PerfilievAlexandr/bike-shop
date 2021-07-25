import { Strategy as LocalStrategy } from 'passport-local';

import userRepo from 'repository/userRepo';

export default new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
      const user = await userRepo.findByEmail(email);

      if (!user) {
        return done(null, false, { message: 'Нет пользователя с таким email' });
      }

      const isValidPassword = user.password === password;

      if (!isValidPassword) {
        return done(null, false, { message: 'Пароль не верный' });
      }

      return done(null, user, { message: 'Добро пожаловать' });
    } catch (err) {
      console.error(err);
      done(err);
    }
  },
);
