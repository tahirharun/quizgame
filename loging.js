   document.getElementById("loginTitle").innerText = t.loginTitle;
      document.getElementById("loginEmail").placeholder = t.email;
      document.getElementById("loginPassword").placeholder = t.password;
      document.getElementById("loginBtn").innerText = t.loginBtn;
      document.getElementById("toSignup").innerText = t.toSignup;

      // Signup form
      document.getElementById("signupTitle").innerText = t.signupTitle;
      document.getElementById("signupName").placeholder = t.name;
      document.getElementById("signupEmail").placeholder = t.email;
      document.getElementById("signupPassword").placeholder = t.password;
      document.getElementById("signupBtn").innerText = t.signupBtn;
      document.getElementById("toLogin").innerText = t.toLogin;
    

    function showSignup() {
      document.getElementById("loginForm").classList.add("hidden");
      document.getElementById("signupForm").classList.remove("hidden");
    }

    function showLogin() {
      document.getElementById("signupForm").classList.add("hidden");
      document.getElementById("loginForm").classList.remove("hidden");
    }
