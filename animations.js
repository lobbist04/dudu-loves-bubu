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
