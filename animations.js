window.onload = () => {
    if (window.location.pathname.includes("proposal.html")) {
        const dudu = document.getElementById('dudu');
        const bgm = document.getElementById('bgm');

        // 1. Start Music
        bgm.play().catch(() => console.log("User must interact first"));

        // 2. Dudu walks to Bubu
        setTimeout(() => {
            dudu.style.left = '40%';
        }, 1000);

        // 3. Dudu kneels and proposes
        setTimeout(() => {
            dudu.innerHTML = "( >_<) <br> _/ \\_ 🌹<br><span>Dudu</span>";
            document.getElementById('dialogue-box').classList.remove('hidden');
            startTypewriter();
        }, 3000);
    }
};

function startTypewriter() {
    const text = "Jyoti, my dear Motu... you make my heart skip a beat. Will you be mine?";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById('typewriter').innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}
// Function to create falling stars and roses
function createFallingElement() {
    const emojis = ['🌹', '⭐', '🌸', '✨', '🌷', '💖'];
    const element = document.createElement('div');
    element.className = 'falling';
    element.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
    element.style.opacity = Math.random();
    
    document.body.appendChild(element);

    // Remove element after it falls
    setTimeout(() => { element.remove(); }, 5000);
}

// Start the rain
setInterval(createFallingElement, 200);

// Bubu & Dudu Logic
window.onload = () => {
    if (window.location.pathname.includes("proposal.html")) {
        const dudu = document.getElementById('dudu');
        const bubu = document.getElementById('bubu');
        const bgm = document.getElementById('bgm');

        // Music Start
        bgm.play().catch(() => console.log("Music ready after click"));

        // Dudu Walking
        setTimeout(() => {
            dudu.style.transform = "translateX(80px)";
        }, 1000);

        // Dudu Proposing
        setTimeout(() => {
            dudu.innerHTML = "( >_<) <br> _/ \\_ 🌹";
            bubu.innerHTML = "(｡♥‿♥｡)";
            document.getElementById('dialogue-box').style.display = 'block';
        }, 3000);
    }
};
