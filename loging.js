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