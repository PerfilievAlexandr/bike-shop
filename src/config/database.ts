import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  PG_USER: process.env.PG_USER,
  PG_PASSWORD: process.env.PG_PASSWORD,
  PG_HOST: process.env.PG_HOST,
  PG_PORT: process.env.PG_PORT,
  PG_DATABASE: process.env.PG_DATABASE,
  PG_SECRET: process.env.PG_SECRET,
};
