const letter = document.getElementById("letter");
const readLetter = document.querySelector('a[href="#letter"]');

readLetter.addEventListener("click", () => {
  letter.classList.remove("hidden");

  requestAnimationFrame(() => {
    letter.classList.add("visible");
  });
});

for (let i = 0; i < 26; i += 1) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = i % 2 === 0 ? "❤" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.opacity = `${Math.random() * 0.45 + 0.35}`;
  heart.style.fontSize = `${Math.random() * 1.6 + 0.8}rem`;
  heart.style.animationDuration = `${Math.random() * 8 + 8}s`;
  heart.style.animationDelay = `${Math.random() * 7}s`;
  document.getElementById("floatingHearts").appendChild(heart);
}
