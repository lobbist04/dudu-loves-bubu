function startProposal() {
  const dudu = document.getElementById("dudu");
  const rose = document.getElementById("rose");
  const text = document.getElementById("dialogue");

  dudu.classList.add("walk");
  text.innerText = "Dudu is hiding something… 🌹";

  setTimeout(() => {
    rose.classList.remove("hidden");
    text.innerText = "Surprise Motu 💖";
  }, 3500);

  setTimeout(() => {
    dudu.classList.add("kneel");
    text.innerHTML = "Jyoti 💕 Will you be mine forever?";
    document.getElementById("answer").classList.remove("hidden");
  }, 5500);
}

function moveNo() {
  const no = document.getElementById("no");
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "%";
  no.style.top = Math.random() * 80 + "%";
}

function yes() {
  fireworks();
  setTimeout(() => {
    document.getElementById("proposal").style.display = "none";
    document.getElementById("letter").style.display = "block";
  }, 2500);
}

function fireworks() {
  setInterval(() => {
    const c = document.createElement("div");
    c.className = "confetti";
    c.innerText = "🎆";
    c.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }, 200);
}
