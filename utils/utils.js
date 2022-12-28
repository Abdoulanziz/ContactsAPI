const isValid = (number) => {
  // Check if the number is integer
  if (isNaN(number)) {
    return false;
  }

  // Number should be 10 digits long
  if (number.length != 10) {
    return false;
  }

  // Number should start with 0
  if (number[0] != 0) {
    return false;
  }

  return true;
};

module.exports = {
  isValid,
};
