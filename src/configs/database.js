import { Sequelize } from "sequelize";
import "dotenv/config";

export function Database() {
   const database = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      pool: {
         max: 100,
         min: 0,
         acquire: 30000,
         idle: 10000
      }
   });

   return database;
}

export const connect = async () => {
   const db = new Database();

   try {
      await db.authenticate();

      console.info(`Connected to database`);
   } catch (error) {
      console.info(error);
      process.exit(1);
   }
}

