// 1. Move these to the top so the HTML can find them
function showBigRose() {
    const rose = document.getElementById('big-rose-overlay');
    rose.classList.remove('hidden');
    rose.style.display = 'flex';
}

function closeRose() {
    document.getElementById('big-rose-overlay').style.display = 'none';
}
let promiseCount = 0;

function handlePromise(num) {
    const promises = [
        "I promise to always fix your bugs! 💻",
        "I promise to never eat your snacks! 🍕",
        "I promise to love you forever! ❤️"
    ];
    
    alert(promises[num-1]); // A small popup message
    document.getElementById(`p${num}`).style.display = 'none';
    
    promiseCount++;
    
    if (promiseCount < 3) {
        document.getElementById(`p${promiseCount + 1}`).classList.remove('hidden');
    } else {
        // All promises accepted, show proposal
        showProposal();
    }
}

function showProposal() {
    const dudu = document.getElementById('dudu');
    const bubu = document.getElementById('bubu');
    
    dudu.innerHTML = "( >_<) <br> _/ \\_ 🌹";
    bubu.innerHTML = "(｡♥‿♥｡)";
    
    document.getElementById('dialogue-box').classList.remove('hidden');
    document.getElementById('dialogue-box').style.opacity = "1";
    
    typeWriter("Jyoti, you've accepted my promises. Now... will you be mine forever?");
}

// Keep your startEmojiRain and typeWriter functions below this...
function startEmojiRain() {
    const container = document.getElementById('rain-container');
    const emojis = ['🌹', '✨', '⭐', '🌸'];

    setInterval(() => {
        if (document.hidden) return; 
        const item = document.createElement('div');
        item.className = 'falling-item';
        item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        item.style.left = Math.random() * 95 + 'vw'; 
        item.style.fontSize = Math.random() * 15 + 15 + 'px';
        item.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        container.appendChild(item);
        setTimeout(() => { item.remove(); }, 4000);
    }, 700); // Slower interval to stop lag
}

window.onload = () => {
    startEmojiRain();
    const dudu = document.getElementById('dudu');
    const bubu = document.getElementById('bubu');
    const bgm = document.getElementById('bgm');

    // Dudu starts walking
    setTimeout(() => {
        if(bgm) bgm.play().catch(() => {});
        dudu.style.transform = "translateX(60px)";
    }, 1500);

    // Dudu Kneels and Gift Appears
    setTimeout(() => {
        dudu.innerHTML = "( >_<) <br> _/ \\_ 🌹";
        bubu.innerHTML = "(｡♥‿♥｡)";
        document.getElementById('gift-section').classList.remove('hidden');
        document.getElementById('dialogue-box').classList.remove('hidden');
        document.getElementById('dialogue-box').style.opacity = "1";
        
        typeWriter("Jyoti, you are my world's favorite logic error. Will you be my Motu forever?");
    }, 3500);
};

function typeWriter(text) {
    let i = 0;
    const target = document.getElementById('typewriter');
    target.innerHTML = "";
    function play() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(play, 50);
        }
    }
    play();
}


