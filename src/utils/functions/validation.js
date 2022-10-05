export const validateEmail = (email) => {
  return !!String(email)
    .match(
      /@/
    );
};

export const validateSamePassword = (password, passwordCheck) => {
  return password === passwordCheck;
};

export const validatePasswordLength = (password) => {
  return password.length >= 8;
};

export const validationUserLogin = (email, password) => {
  return !(validateEmail(email) && validatePasswordLength(password));
};

export const validationUserRegister = (email, password, passwordCheck) => {
  return !(validateEmail(email) && validatePasswordLength(password) && validateSamePassword(password, passwordCheck));
};