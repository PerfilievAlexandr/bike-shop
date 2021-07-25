import { Pool } from 'pg';

import { dbConfig } from 'config/database';

export const pool = new Pool({
  user: dbConfig.PG_USER,
  password: dbConfig.PG_PASSWORD,
  host: dbConfig.PG_HOST,
  database: dbConfig.PG_DATABASE,
  port: Number(dbConfig.PG_PORT),
});
