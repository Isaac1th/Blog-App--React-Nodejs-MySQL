import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6AJN!H*Hx-FRW2T',
  database: 'blog',
});
