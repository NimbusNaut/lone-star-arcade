function launchGame(url) {
  if (typeof gtag === "function") {
    let gameName = "unknown";

    if (url.includes("pong")) gameName = "pong";
    if (url.includes("bbq")) gameName = "bbq";
    if (url.includes("shooter")) gameName = "shooter";

    gtag("event", "play_game", {
      game: gameName
    });
  }

  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");

  frame.src = url;
  modal.style.display = "flex";
}

function closeGame() {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");

  modal.style.display = "none";
  frame.src = "";
}
