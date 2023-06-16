const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/;

export const validation = (data) => {
  const errors = {};


  if (!regexEmail.test(data.email)) errors.email = "Email is invalid";
  if (!data.email) errors.email = "Email es requerido  ";
  if (data.email.length > 35) errors.email = "El email no puede contener mas de 35 carapteres";
  
  if (!regexPassword.test(data.password)) errors.password = "Password is invalid";
  if (!data.password) errors.password = "Password is required";
  if (data.password.length < 6 || data.password.length > 10) errors.password = "Password no tiene entre 6 y 10 caractere";

  return errors;
};
