import { Request, Response, NextFunction } from 'express';

import passport from 'libs/passport';

import userRepo from 'repository/userRepo';

class UserController {
  async signUp(req: Request, res: Response) {
    const user = await userRepo.findById('1');

    res.send(user);
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    await passport.authenticate('local',
      async (err, user) => {
        if (err) throw err;

        req.login(user, (error) => {
          if (error) {
            return next(error);
          }

          res.send(user);
        });
      })(req, res, next);
  }
}

export default new UserController();
