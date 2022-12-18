const dbConfig = require("../util/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idel: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.people = require("./librarysql.people.js")(sequelize, Sequelize);
db.books = require("./librarysql.books.js")(sequelize, Sequelize);
db.authors = require("./librarysql.authors.js")(sequelize, Sequelize);
db.bookRents = require("./librarysql.book_rents.js")(sequelize, Sequelize);
db.authorBooks = require("./librarysql.author_books.js")(sequelize, Sequelize);

module.exports = db;
