import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool
  .getConnection()
  .then((res) => {
    pool.releaseConnection(res);
  })
  .catch((error) =>
    console.error(
      "Error while trying to connect to the database " + error.message
    )
  );

export default pool;
