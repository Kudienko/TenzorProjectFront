export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  
  export const validateLogin = (login) => {
    return login.length >= 4;
  }
  
  export const validatePasswords = (password, repeatPassword) => {
    return password === repeatPassword;
  }

export const validateLenght = (password) => {
    return password.length >= 4;
}
  