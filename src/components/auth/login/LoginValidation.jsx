const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePassword = (password) => {
    // Проверка минимальной длины пароля (пример: минимум 6 символов)
    return password.length >= 6;
  }