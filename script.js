const togglePassword = document.querySelector(".togglePassword");
const passwordInput = document.getElementById("password");
togglePassword.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  togglePassword.classList.toggle("active");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
