export const validateEmail = (emailField) => {
  // eslint-disable-next-line
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  // eslint-disable-next-line

  if (reg.test(emailField) === false) {
    return false;
  }

  return true;
};
