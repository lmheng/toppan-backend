module.exports = (sequelize, Sequelize) => {
  const Authors = sequelize.define("authors", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return Authors;
};
