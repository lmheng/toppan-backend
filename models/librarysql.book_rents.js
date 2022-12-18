module.exports = (sequelize, Sequelize) => {
  const BookRents = sequelize.define("book_rents", {});

  return BookRents;
};
