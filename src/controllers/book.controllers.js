import { DataTypes } from "sequelize";
import {sequelize} from "../config/database.js";

const Books = sequelize.define("Book", {
    title: {
    type: DataTypes.STRING(),
    allowNull: false,
    unique: true,
  },
    autor: {
        type:DataTypes.STRING(),
        allowNull: false,
    },
    pages: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(),
        allowNull: true,
    }
});