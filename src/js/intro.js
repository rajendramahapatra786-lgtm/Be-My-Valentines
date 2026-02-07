const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionText = document.getElementById("questionText");
const bgMusic = document.getElementById("bgMusic");

let tries = 0;
let musicStarted = false;

// 🔓 start music on first user interaction (browser-safe)
function startMusic() {
  if (musicStarted) return;
  musicStarted = true;

  bgMusic.volume = 0.8;
  bgMusic.play().catch(() => {});

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// YES → stop music → go to main.html
yesBtn.addEventListener("click", () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;

  window.location.href = "main.html";
});

// NO → tease 😈
function moveNoButton() {
  tries++;

  const rect = noBtn.getBoundingClientRect();
  const offsetX = (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 50);
  const offsetY = (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 40);

  noBtn.style.position = "absolute";
  noBtn.style.left = rect.left + offsetX + "px";
  noBtn.style.top = rect.top + offsetY + "px";

  if (tries === 6) {
    questionText.textContent = "Nice try baby😏";
  }
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});