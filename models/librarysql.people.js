module.exports = (sequelize, Sequelize) => {
  const People = sequelize.define("people", {
    name: {
      type: Sequelize.STRING,
    },
    country_id: {
      type: Sequelize.BIGINT,
    },
  });

  return People;
};
