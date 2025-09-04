function showLeaderboard() {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "{}");

  // Subjects to display
  const subjects = ["maths", "english", "geography"];

  subjects.forEach(sub => {
    let board = leaderboard[sub] || [];

    let html = `<h3>${sub.toUpperCase()}</h3>`;
    if (board.length === 0) {
      html += "<p>No scores yet!</p>";
    } else {
      html += "<ol>";
      board.forEach(entry => {
        html += `<li><b>${entry.user}</b> - ${entry.score}</li>`;
      });
      html += "</ol>";
    }

    document.getElementById(sub + "-board").innerHTML = html;
  });
}
