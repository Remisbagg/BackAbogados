import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('abogados', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  export default sequelize;