const users = [];

// DOM elements
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Switch forms
showSignup.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});
showLogin.addEventListener("click", () => {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Login function
loginBtn.addEventListener("click", () => {
  let userInput = document.getElementById("loginUser").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  if(userInput === "" || password === "") {
    alert("⚠️ Please enter your username/email and password.");
    return;
  }

  let found = users.find(u => 
    (u.email === userInput || u.username === userInput) && u.password === password
  );

  if(found) {
    alert(`✅ Welcome back, ${found.username}!`);
    window.location.href = "quiz.html"; // connect to quiz
  } else {
    alert("❌ Wrong username/email or password. Try again.");
  }
});

// Signup function
signupBtn.addEventListener("click", () => {
  let name = document.getElementById("signupName").value.trim();
  let username = document.getElementById("signupUser").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();

  if(name === "" || username === "" || email === "" || password === "") {
    alert("⚠️ Please fill in all fields to sign up.");
    return;
  }

  let exists = users.find(u => u.email === email || u.username === username);
  if(exists) {
    alert("⚠️ User already exists. Try logging in.");
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    return;
  }

  users.push({ name, username, email, password });
  alert("✅ Account created! You can now log in.");
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});
