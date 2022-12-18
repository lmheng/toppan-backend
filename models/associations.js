const db = require("./index.js");

db.bookRents.belongsTo(db.people, {
  foreignKey: "person_id",
  as: "people",
});

db.bookRents.belongsTo(db.books, {
  foreignKey: "book_id",
  as: "books",
});

db.authorBooks.belongsTo(db.books, {
  foreignKey: "book_id",
  as: "books",
});

db.authorBooks.belongsTo(db.authors, {
  foreignKey: "author_id",
  as: "authors",
});
