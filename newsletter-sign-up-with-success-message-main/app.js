
const form = document.querySelector(".default-form");
const email = document.querySelector("#emailAddress");
const error = document.querySelector(".error-message");
const success = document.querySelector(".model-box");
const section = document.querySelector("section");
const dimissButton = document.querySelector('.success-container')

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  if (emailValue === "") {
    email.classList.add("error");
    error.textContent = "Email is required";
  } else if (!email.checkValidity()) {
    email.classList.add("error");
    error.textContent = "Enter a valid email";
  } else {
    success.classList.add("success");
    section.classList.add("success");
  }
});

email.addEventListener("input", function () {
  if (email.value.trim() === "") {
    return;
  }
  if (email.checkValidity()) {
    email.classList.remove("error");
    error.textContent = "";
    email.classList.add("success");
  }
});

dimissButton.addEventListener('click', function (){
   success.classList.remove("success");
    section.classList.remove("success");
   email.classList.remove("success");
    email.value = '';
})