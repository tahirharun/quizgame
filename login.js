// ====== AUTH ======
let currentUser = null;

function showAuthForm(type){
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.add("hidden");
  if(type === "login") document.getElementById("login-form").classList.remove("hidden");
  if(type === "signup") document.getElementById("signup-form").classList.remove("hidden");
}

function signup(){
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  if(!username || !password){
    document.getElementById("signup-error").textContent = "Fill in all fields";
    return;
  }
  if(localStorage.getItem("user_" + username)){
    document.getElementById("signup-error").textContent = "Username already exists";
    return;
  }
  localStorage.setItem("user_" + username, password);
  currentUser = username;
  startAfterLogin();
}

function login(){
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const stored = localStorage.getItem("user_" + username);
  if(stored && stored === password){
    currentUser = username;
    startAfterLogin();
  } else {
    document.getElementById("login-error").textContent = "Invalid username or password";
  }
}

function startAfterLogin(){
  show("subject-screen");
  document.querySelector(".container h1").textContent = `Welcome, ${currentUser}! Choose Subject`;
}
