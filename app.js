const predefinedUsername = "user";
const predefinedPassword = "password";

document.getElementById("loginBtn").addEventListener("click", function () {
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
    alert("Вход выполнен успешно!");
  } else {
    alert("Ошибка входа. Пожалуйста, проверьте имя пользователя и пароль.");
  }

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});