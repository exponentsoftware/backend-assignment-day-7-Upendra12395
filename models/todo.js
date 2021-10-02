module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    userName: {
        type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    }
  });

  return Todo;
};