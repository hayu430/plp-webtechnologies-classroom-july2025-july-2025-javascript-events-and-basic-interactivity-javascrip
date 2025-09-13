// 🌙 Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// ❓ FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// 📋 Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from refreshing the page

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  let isValid = true;

  // Clear old errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  // Final message
  if (isValid) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Please fix errors above.";
  }
});
