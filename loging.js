     function signup() {
      let name = document.getElementById("signupName").value;
      let email = document.getElementById("signupEmail").value;
      let pass = document.getElementById("signupPassword").value;

      if(name && email && pass) {
        alert("Account created successfully!");
        document.getElementById("signupSection").classList.add("hidden");
        document.getElementById("subjectSection").classList.remove("hidden");
      } else {
        alert("Please fill in all fields.");
      }
    }
   function login() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if(user && pass) {
        document.getElementById("authSection").classList.add("hidden");
        document.getElementById("subjectSection").classList.remove("hidden");
      } else {
        alert("Please enter both email and password.");
      }
    }

    function startQuiz(subject) {
      document.getElementById("subjectSection").classList.add("hidden");
      document.getElementById("quizSection").classList.remove("hidden");
      document.getElementById("quizTitle").innerText = subject + " Quiz";
    }