const db = require("../models");
const Constants = require("../util/constants");

const getTop3ReadBook = async (countryCode) => {
  const numericalCode = Constants.countryList[countryCode];

  if (!!numericalCode || numericalCode === 0) {
    const top3BooksWithReaders = [];

    await db.sequelize
      .query(
        `
      select rent.book_id,topBooks.book_name, topBooks.author_name, rent.name, rent.rentCount, rent.totalSum
      from (
        select br.book_id, b.name as book_name, a.name as author_name, COUNT(*) 
        from book_rents br
        join books b
          on br.book_id = b.id
        join author_books ab
          on ab.book_id = b.id
        join authors a
          on a.id = ab.author_id
        group by br.book_id, book_name, author_name order by COUNT(*) desc limit 3
      ) topBooks
      join (
        select br.book_id, p.id, p.name, COUNT(*) as rentCount, totalRent.totalSum, row_number() over (partition by book_id order by COUNT(*) desc) as rentRank
        from people p
        join book_rents br
          on p.id = br.person_id
        join (
        select p.id, COUNT(*) as totalSum from people p, book_rents br
        where p.id = br.person_id and p.country_id = ${numericalCode}
        group by p.id order by totalSum desc
        ) totalRent
          on p.id = totalRent.id
        group by br.book_id, p.id, p.name, totalSum order by book_id asc, totalSum desc
      ) rent
        on topBooks.book_id = rent.book_id
      where rentRank <= 3
      group by rent.book_id,topBooks.book_name, topBooks.author_name, rent.name, rent.rentCount, totalSum order by book_id, totalSum desc
      `
      )
      .then(([top3BooksResult, top3BooksMetadata]) =>
        top3BooksResult.forEach((book) => {
          if (
            top3BooksWithReaders.some(
              (value) => value["name"] === book["book_name"]
            )
          ) {
            top3BooksWithReaders
              .find((value) => value["name"] === book["book_name"])
              ["borrower"].push(book["name"]);
          } else {
            top3BooksWithReaders.push({
              author: book["author_name"],
              name: book["book_name"],
              borrower: [book["name"]],
            });
          }
        })
      );

    if (top3BooksWithReaders.length === 0) throw new Error("No result");

    return top3BooksWithReaders;
  } else {
    throw new Error("Invalid param");
  }
};

const getRandomCountry = () => {
  const keys = Object.keys(Constants.countryCode);
  const selectedCountry = keys[Math.floor(Math.random() * keys.length)];

  return {
    full_name: Constants.countryCode[selectedCountry],
    country_code: selectedCountry,
  };
};

const libraryServices = {
  getTop3ReadBook,
  getRandomCountry,
};

module.exports = libraryServices;
