function unlock() {
  const pass = document.getElementById("password").value.toLowerCase();
  if (pass === "motu") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("proposal").style.display = "block";
   function unlock() {
  const pass = document.getElementById("password").value.toLowerCase();
  const music = document.getElementById("bg-music");

  if (pass === "motu") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("proposal").style.display = "block";

    music.volume = 0.5;
    music.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction");
    });
  } else {
    document.getElementById("error").innerText =
      "Wrong 😅 Try again Motu 💖";
  }
}

  } else {
    document.getElementById("error").innerText = "Wrong 😅 Try again Motu 💖";
  }
}
