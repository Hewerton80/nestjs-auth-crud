const host =  process.env.DATABASE_HOST;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASS;
const database = process.env.DATABASE_NAME;

module.exports = {
  "type": "mysql",
  host,
  "port": 3306,
  username,
  password,
  database,
  "synchronize": true,
  "dropSchema": false,
  "logging": true,
  "entities": [__dirname + "/src/**/*.entity.ts", __dirname + "/dist/**/*.entity.js"],
  "migrations": ["src/migrations/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts", "dist/subscriber/**/.js"],
  "cli": {
    "entitiesDir": "src",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscriber"
  }
}