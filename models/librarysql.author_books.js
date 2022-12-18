module.exports = (sequelize, Sequelize) => {
  const AuthorBooks = sequelize.define("author_books", {});

  return AuthorBooks;
};
