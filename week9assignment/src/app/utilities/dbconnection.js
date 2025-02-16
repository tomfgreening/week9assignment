import pg from "pg";

const dbConnectionString = process.env.DATABASEURL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
