// ================= STEP 2 + 3: MAIN ENVELOPE OPEN =================

const enterBtn = document.getElementById("enterBtn");
const intro = document.querySelector(".intro");
const stack = document.querySelector(".stack");
const grid = document.getElementById("grid");

enterBtn.onclick = () => {
  enterBtn.style.display = "none";
  stack.classList.add("open");

  setTimeout(() => {
    intro.style.display = "none";
    grid.style.display = "grid";

    setTimeout(() => {
      grid.classList.add("show");
    }, 100);
  }, 900);
};

// ================= HEART FLOATING LOGIC =================

const heartsContainer = document.querySelector(".hearts-container");
const heartEmojis = ["💖", "❤️"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 14 + 14 + "px";
  heart.style.animationDuration = Math.random() * 6 + 6 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 600);

// ================= STEP 4 + 5: MESSAGE + VANISH + END =================

document.addEventListener("DOMContentLoaded", () => {
  const envs = document.querySelectorAll(".env");
  const message = document.getElementById("message");
  const letterImg = document.getElementById("letterImg");
  const letterText = document.getElementById("letterText");
  const backBtn = document.getElementById("backBtn");
  const endScene = document.getElementById("endScene");
  const endText = document.getElementById("endText");

  let vanishedCount = 0;
  let activeEnv = null;

  const content = [
    {
      img: "assets/images/3.jpeg",
      text:
        "Out of all people in this world, my heart felt safest with you. And it still does. No matter what phase we go through."
    },
    {
      img: "assets/images/2.jpeg",
      text:
        "You don't even realize how much light you bring into my life. Your presence, your voice, your little habits — they mean more to me than you know."
    },
    {
      img: "assets/images/3.jpeg",
      text:
        "I don't want to win arguments. I want to keep you. Because at the end of the day, being right means nothing if it means losing you."
    },
    {
      img: "assets/images/1.jpeg",
      text:
        "No matter how hard days get, my choice doesn't change — it's still you.I'm not giving up on us. I'm here, and I want to make this work together."
    }
  ];

  function typeText(text, el) {
    el.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(timer);
    }, 40);
  }

  // OPEN ENVELOPE
  envs.forEach((env, i) => {
    env.addEventListener("click", () => {
      if (env.style.visibility === "hidden") return;

      activeEnv = env;

      // hide other envelopes temporarily
      envs.forEach(e => {
        if (e !== env && e.style.visibility !== "hidden") {
          e.style.opacity = "0";
          e.style.pointerEvents = "none";
        }
      });

      letterImg.src = content[i].img;
      typeText(content[i].text, letterText);

      message.style.display = "grid";
      setTimeout(() => message.classList.add("open"), 50);
    });
  });

  // BACK BUTTON
  backBtn.onclick = () => {
    message.classList.remove("open");
    message.style.display = "none";

    if (activeEnv) {
      activeEnv.style.opacity = "0";
      activeEnv.style.transform = "scale(0.6)";
      activeEnv.style.visibility = "hidden";
      activeEnv.style.pointerEvents = "none";

      vanishedCount++;
      activeEnv = null;
    }

    // restore remaining envelopes
    envs.forEach(e => {
      if (e.style.visibility !== "hidden") {
        e.style.opacity = "1";
        e.style.pointerEvents = "auto";
      }
    });

    // FINAL END SCENE
    if (vanishedCount === envs.length) {
      setTimeout(() => {
        grid.style.opacity = "0";

        setTimeout(() => {
          grid.style.display = "none";
          endScene.style.display = "grid";
        }, 800);
      }, 400);
    }
  };
});

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = 0.4; // soft romantic volume
    bgMusic.play();
  }
}, { once: true });