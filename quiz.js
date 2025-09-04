// ✅ Make sure user is logged in
function checkLogin() {
  let user = localStorage.getItem("currentUser");
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome").innerText = "Welcome, " + user + "!";
    loadQuestion();
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// ----------------- QUIZ -----------------
const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Capital of Kenya?",
    options: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"],
    answer: "Nairobi"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("question").innerHTML =
      `Quiz finished! Your score is ${score}/${questions.length}`;
    document.getElementById("options").innerHTML = "";
    return;
  }

  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<button class="option-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(button, selected) {
  let q = questions[currentQuestion];
  document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);

  if (selected === q.answer) {
    button.style.backgroundColor = "green";
    score++;
  } else {
    button.style.backgroundColor = "red";
    document.querySelectorAll(".option-btn").forEach(btn => {
      if (btn.textContent === q.answer) {
        btn.style.backgroundColor = "green";
      }
    });
  }
}

function nextQuestion() {
  currentQuestion++;
  loadQuestion();
}
