import Sequelize from 'sequelize'

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_FILE_PATH
})

export default sequelize 