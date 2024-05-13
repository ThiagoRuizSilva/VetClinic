import Sequelize from "sequelize";
import db from "../db/connection.js";

const Tutors = db.define(
  "Tutors",
  {
    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "The email field must be a valid email.",
        },
      },
    },
    date_of_birth: {
      type: Sequelize.STRING,
    },
    zip_code: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  },
);

export default Tutors;
