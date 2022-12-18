const express = require("express");
const libraryController = require("../controllers/library.controllers");

const router = express.Router();

router.get("/GetTop3ReadBook", libraryController.getTop3ReadBook);
router.get("/getRandomCountry", libraryController.getRandomCountry);

module.exports = router;
