const messages = [
  "I almost didn’t say any of this…",
  // "Because some feelings aren’t meant to be rushed.",
  "But every time I see you, it feels different.",
  "So this is me… being brave for once.",
  "Will you be my Valentine? 🤍"
];

let index = 0;
let tries = 0;
let musicStarted = false;

const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

// initial text
text.innerText = messages[index];


// 🔓 start music on first interaction (browser-safe)
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


// 👉 CONTINUE BUTTON (story flow)
nextBtn.addEventListener("click", () => {
  index++;

  if (index < messages.length) {
    text.innerText = messages[index];

    // last message → show Yes / No
    if (index === messages.length - 1) {
      nextBtn.style.display = "none";
      buttons.style.display = "block";
    }
  }
});


// ❤️ YES → stop music → go to next page
function yesClick() {
  bgMusic.pause();
  bgMusic.currentTime = 0;

  text.innerText = "I knew it… ❤️";

  setTimeout(() => {
    window.location.href = "main.html";
  }, 1200);
}


// 😈 NO → tease & escape
function moveNoButton() {
  tries++;

  const offsetX = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 60);
  const offsetY = (Math.random() > 0.5 ? 1 : -1) * (30 + Math.random() * 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = offsetX + "px";
  noBtn.style.top = offsetY + "px";

  if (tries === 5) {
    text.innerText = "Okay... rude 😤 ";
  }
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// FULL PAGE ❤️ FLOATING HEARTS
const heartsContainer = document.querySelector(".hearts");
const heartEmojis = ["❤️"]; // ONLY this heart

for (let i = 0; i < 40; i++) {
  const heart = document.createElement("span");
  heart.textContent = heartEmojis[0];

  heart.style.left = Math.random() * 100 + "vw";        // random X
  heart.style.fontSize = 12 + Math.random() * 26 + "px"; // random size
  heart.style.animationDuration = 8 + Math.random() * 12 + "s"; // speed
  heart.style.animationDelay = Math.random() * 10 + "s"; // stagger

  heartsContainer.appendChild(heart);
}