import { pool } from 'libs/pg';

import { IUser } from 'models/users';

class UserRepo {
  public async findById(id: string): Promise<IUser> {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };

    const { rows } = await pool.query(query);

    return rows[0];
  }

  public async findByEmail(email: string): Promise<IUser> {
    const query = {
      text: 'SELECT * FROM users WHERE email = $1',
      values: [email],
    };

    const { rows } = await pool.query(query);

    return rows[0];
  }
}

export default new UserRepo();
