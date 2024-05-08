import Sequelize from 'sequelize'
import db from '../db/connection.js'
import Tutors from './Tutors.js'

const Pets = db.define('Pets', {
    name: {
        type: Sequelize.STRING
    },
    species: {
        type: Sequelize.STRING
    },
    carry: {
        type: Sequelize.STRING
    },
    weight: {
        type: Sequelize.INTEGER
    },
    date_of_birth: {
        type: Sequelize.STRING
    }


})
Tutors.hasMany(Pets, { as: 'pets' });
Pets.belongsTo(Tutors, { as: 'tutor' });
export default Pets