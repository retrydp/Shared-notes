const Sequelize = require('sequelize');

const sequelize = new Sequelize('reactjs', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

const Notes = require('./notes')(sequelize);

module.exports = {
  sequelize: sequelize,
  notes: Notes,
};

const greetDevelopers = (list) =>
  list.map((el) => ({
    ...el,
    greeting: `Hi ${el.firstname}, what do you like the most about ${el.language}?`,
  }));
