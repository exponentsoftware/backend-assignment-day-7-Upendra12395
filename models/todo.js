module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    phone: {
        type: Sequelize.INTEGER
    },
    cardNo: {
      type: Sequelize.INTEGER
    }
  });

  return Todo;
};