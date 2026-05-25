const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

openBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  openBtn.textContent = "відкрито ♡";

  setTimeout(() => {
    surprise.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 220);

  createSparkles();
  createButterflyRain();
});

function createSparkles() {
  const symbols = ["✦", "✧", "⋆", "♡", "𓆏"];

  for (let i = 0; i < 28; i++) {
    const sparkle = document.createElement("div");
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = Math.random() * 18 + 14 + "px";
    sparkle.style.animationDuration = Math.random() * 0.8 + 1.2 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1800);
  }
}

function createButterflyRain() {
  for (let i = 0; i < 10; i++) {
    const butterfly = document.createElement("div");
    butterfly.textContent = "🦋";
    butterfly.className = "falling-butterfly";

    butterfly.style.left = Math.random() * 100 + "vw";
    butterfly.style.animationDuration = Math.random() * 2 + 3.5 + "s";
    butterfly.style.animationDelay = Math.random() * 0.8 + "s";
    butterfly.style.fontSize = Math.random() * 10 + 20 + "px";

    document.body.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
    }, 6000);
  }
}

const style = document.createElement("style");
style.textContent = `
  .sparkle {
    position: fixed;
    color: #8affd8;
    pointer-events: none;
    z-index: 1000;
    text-shadow:
      0 0 8px rgba(126, 255, 212, 0.9),
      0 0 18px rgba(126, 255, 212, 0.45);
    animation: sparkleFly ease forwards;
  }

  .falling-butterfly {
    position: fixed;
    top: -40px;
    pointer-events: none;
    z-index: 999;
    filter: drop-shadow(0 0 10px rgba(126, 255, 212, 0.8));
    animation: butterflyFall linear forwards;
  }

  @keyframes sparkleFly {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1) rotate(0deg);
    }

    100% {
      opacity: 0;
      transform: translateY(-85px) scale(1.8) rotate(180deg);
    }
  }

  @keyframes butterflyFall {
    0% {
      opacity: 0;
      transform: translateY(0) translateX(0) rotate(0deg);
    }

    15% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(110vh) translateX(45px) rotate(35deg);
    }
  }
`;
document.head.appendChild(style);