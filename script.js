const textarea = document.getElementById("input");
const badges = document.getElementById("badges");

textarea.addEventListener("keyup", (e) => {
  badges.innerHTML = "";
  const badgeWords = textarea.value
    .split(",")
    .filter((badge) => badge.trim() !== "")
    .map((badge) => badge.trim());
  badgeWords.forEach((badge) => {
    const newBadge = document.createElement("span");
    newBadge.textContent = badge;
    newBadge.classList.add("badge");
    badges.appendChild(newBadge);
  });
  if (e.key === "Enter") {
    selectRandom(badgeWords)
  }
});

async function selectRandom(badgeWords) {
    if (badgeWords.length !== 0) {
        setTimeout(() => {
          textarea.value = "";
        }, 20);
        let times = 15;
        let randomChoice;
        const interval = setInterval(() => {
          const randomBadge = pickRandomBadge();
          randomBadge.classList.add("highlighted");
          times -= 1;
          if (times !== 0) {
            setTimeout(() => {
              randomBadge.classList.remove("highlighted");
            }, 150);
          } else {
              clearInterval(interval);
              randomChoice = randomBadge;
          }
        }, 200);
      }
}

function pickRandomBadge() {
  const badges = document.querySelectorAll(".badge");
  return badges[Math.floor(Math.random() * badges.length)];
}
