import Sequelize from "sequelize";
import db from "../db/connection.js";
import Tutors from "./Tutors.js";

const Pets = db.define(
  "Pets",
  {
    name: {
      type: Sequelize.STRING,
    },
    species: {
      type: Sequelize.STRING,
    },
    carry: {
      type: Sequelize.STRING,
    },
    weight: {
      type: Sequelize.INTEGER,
    },
    date_of_birth: {
      type: Sequelize.STRING,
      validate: {
        validDate(value) {
          if (!/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})$/.test(value)) {
            throw new Error("The date of birth must be in the format yyyy-mm-dd HH:MM.");
          }
        },
      },
    },
  },
  {
    timestamps: false,
    tableName: "Pets",
  },
);

Tutors.hasMany(Pets, { as: "pets" });
Pets.belongsTo(Tutors, { as: "tutor", foreignKey: "TutorId" });

export default Pets;
