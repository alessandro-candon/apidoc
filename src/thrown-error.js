const thrownError = (errorMessage, code = 1) => {
  console.error(errorMessage);
  process.exit(code);
}

exports.thrownError = thrownError;
