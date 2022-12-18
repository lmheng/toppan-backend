const errors = require("../util/exceptions");
const Library = require("../services/library.services");

require("dotenv").config("../.env");

const getTop3ReadBook = async (req, res) => {
  try {
    const countryCode = req.query["country_code"];
    const result = await Library.getTop3ReadBook(countryCode);

    res.status(200).send(result);
  } catch (error) {
    errors(req, res, error);
  }
};

const getRandomCountry = (req, res) => {
  try {
    const result = Library.getRandomCountry();
    res.status(200).send({ country: result });
  } catch (error) {
    errors(req, res, error);
  }
};

const LibraryController = {
  getTop3ReadBook,
  getRandomCountry,
};

module.exports = LibraryController;
