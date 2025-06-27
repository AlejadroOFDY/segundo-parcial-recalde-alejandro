import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

// Sacado de la documentación de Sequelize, me ayudará a saber si la BD se conectó o no
export const startDb = async () => {
  try {
  await sequelize.authenticate();
  console.log('La base de datos se conectó correctamente');
  await sequelize.sync();
} catch (error) {
  console.error('Se produjo un error al intentar conectar la DB', error);
}
}
