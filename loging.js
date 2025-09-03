 function showSignup() {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("signupForm").classList.remove("hidden");
    }
    function showLogin() {
      document.getElementById("signupForm").classList.add("hidden");
      document.getElementById("loginForm").classList.remove("hidden");
    }
    function login() {
      let email = document.getElementById("loginEmail").value.trim();
      let password = document.getElementById("loginPassword").value.trim();
      if(email === "" || password === "") {
        alert("Please enter both email and password before logging in.");
      } else {
        window.location.href = "quiz.html";
      }
    }

    function signup() {
      let name = document.getElementById("signupName").value.trim();
      let email = document.getElementById("signupEmail").value.trim();
      let password = document.getElementById("signupPassword").value.trim();
      if(name === "" || email === "" || password === "") {
        alert("Please fill in all fields to sign up.");
      } else {
        window.location.href = "quiz.html";
      }
    }