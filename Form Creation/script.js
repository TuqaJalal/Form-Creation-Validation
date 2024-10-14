const form = document.getElementById("registration-form");

document.addEventListener("DOMContentLoaded", function () {
  // get elmentes---
  const feedbackDiv = document.getElementById("form-feedback"),
    usernameInput = document.getElementById("username"),
    emailInput = document.getElementById("email"),
    passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // get values--
    const username = usernameInput.value.trim(),
      email = emailInput.value.trim(),
      password = passwordInput.value.trim();

    // Validation values---
    let isValid = true,
      messages = [];

    // user validation---
    if (username.length < 3) {
      isValid = false;
      messages.push("username should be more tahn 3 letters");
    }

    // email validation--
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      isValid = false;
      messages.push("email is not valid");
    }

    // password validation--
    if (password.length < 8) {
      isValid = false;
      messages.push("password should be more than 6 letters");
    }

    // check valid---
    if (isValid) {
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful!";
    } else {
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join("<br>");
    }
  });
});
