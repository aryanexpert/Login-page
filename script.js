let mode = "login";

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const passwordField = document.getElementById("passwordField");
const submitBtn = document.getElementById("submitBtn");
const switchRegister = document.getElementById("switchRegister");
const forgot = document.getElementById("forgot");
const message = document.getElementById("message");

switchRegister.addEventListener("click", () => {
  if (mode === "login") {
    mode = "register";
    title.innerText = "Create an account";
    subtitle.innerText = "Join us today!";
    submitBtn.innerText = "Register";
    forgot.style.display = "none";
    switchRegister.innerText = "Log In";
  } else {
    mode = "login";
    title.innerText = "Welcome back!";
    subtitle.innerText = "We're so excited to see you again!";
    submitBtn.innerText = "Log In";
    forgot.style.display = "inline";
    switchRegister.innerText = "Register";
  }
});

forgot.addEventListener("click", () => {
  message.style.color = "#00aff4";
  message.innerText = "Password reset link sent (demo)";
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password")?.value;

  if (mode === "login") {
    if (email === "admin@discord.com" && password === "123456") {
      message.style.color = "lightgreen";
      message.innerText = "Login successful ✅";
    } else {
      message.style.color = "red";
      message.innerText = "Invalid login ❌";
    }
  } else {
    message.style.color = "lightgreen";
    message.innerText = "Account created successfully ✅";
  }
});

