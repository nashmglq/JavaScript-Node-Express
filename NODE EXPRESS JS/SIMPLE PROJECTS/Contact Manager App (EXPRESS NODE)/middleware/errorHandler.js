const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // status code is a keyword (200, 400)
  // if we have statusCode print statuscode if none return 500

  // res.status(statusCode).json({msg: err.message, stackTrace: err.stack}) // stackTrace is the exact error
  //err.message and err.stack are keyword

  switch (statusCode) {
    case 400:
      res
        .status(statusCode)
        .json({ msg: "Validation Error", msg: err.message });
      break;
    case 401:
      res.status(statusCode).json({ msg: "Unauthorize", msg: err.message });
      break;
    case 403:
      res.status(statusCode).json({ msg: "Forbidden", msg: err.message });
      break;
    case 404:
      res.status(statusCode).json({ msg: "Not found", msg: err.message });
      break;
    case 500:
      res.status(statusCode).json({ msg: "Internal server", msg: err.message });
      break;
  }
};

module.exports = errorHandler;

// LETS DO SOMETHING TO CLEAN IT

// switch (statusCode) {
//     case constants.VALIDATION_ERROR:
//       res.status(statusCode).json({ msg: "Validation Error", msg: err.message });
//       break;
//     case constants.UNAUTHORIZED:
//       res.status(statusCode).json({ msg: "Unauthorize", msg: err.message });
//       break;
//     case constants.FORBIDDEN:
//       res.status(statusCode).json({ msg: "Forbidden", msg: err.message });
//       break;
//     case constants.NOT_FOUND:
//       res.status(statusCode).json({ msg: "Not found", msg: err.message });
//       break;
//     case constants.INTERNAL_ERROR:
//       res.status(statusCode).json({ msg: "Internal server", msg: err.message });
//       break;
//   }
