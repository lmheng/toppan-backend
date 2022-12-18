const errors = (req, res, error) => {
  console.log(error);
  res.status(400).send({ message: error.message });
};

module.exports = errors;
