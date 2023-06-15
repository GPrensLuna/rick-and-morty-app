const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
const regexPassword = /\d/;

export const validation = (useData) => {
  const errors = {};
  if (useData.email.length > 35)
    errors.email = "El email no puede contener mas de 35 carapteres";
  if (!useData.email) {
    errors.email = "Email es requerido  ";
  }
  if (!regexEmail.test(useData.email)) {
    errors.email = "Email is invalid";
  }

  if (!useData.password) {
    errors.password = "Password is required";
  }
   if (!regexPassword.test(useData.password)) {
    errors.password = "Password is invalid";
  }
  if (useData.password.length < 6 || useData.password.length > 10)
    errors.password = "Password no tiene entre 6 y 10 caractere";

  return errors;
};
