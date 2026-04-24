function launchGame(url) {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");

  frame.src = url;
  modal.style.display = "block";
}

function closeGame() {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");

  modal.style.display = "none";
  frame.src = "";
}
