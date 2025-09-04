function show(id) {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("signup-screen").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function signup() {
  const u = document.getElementById("signup-username").value.trim();
  const p = document.getElementById("signup-password").value.trim();

  if (!u || !p) return alert("Enter username and password!");

  let users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[u]) return alert("Username already exists!");

  users[u] = p;
  localStorage.setItem("users", JSON.stringify(users));

 
  localStorage.setItem("currentUser", u);


  window.location.href = "quiz.html";
}

function login() {
  const u = document.getElementById("login-username").value.trim();
  const p = document.getElementById("login-password").value.trim();

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[u] && users[u] === p) {
    
    localStorage.setItem("currentUser", u);

   
    window.location.href = "quiz.html";
  } else {
    alert("Invalid username or password!");
  }
}
