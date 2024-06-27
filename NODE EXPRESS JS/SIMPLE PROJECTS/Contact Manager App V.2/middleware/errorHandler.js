const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res
        .status(statusCode)
        .json({ msg: "Validation Error", error: err.message });
      break;
    case 401:
      res.status(statusCode).json({ msg: "Unauthorized", error: err.message });
      break;
    case 403:
      res.status(statusCode).json({ msg: "Forbidden", error: err.message });
      break;
    case 404:
      res.status(statusCode).json({ msg: "Not found", error: err.message });
      break;
    case 500:
      res
        .status(statusCode)
        .json({ msg: "Internal server", error: err.message });
      break;
  }
};

module.exports = errorHandler