function checkPassword() {
    const val = document.getElementById('passInput').value.toLowerCase();
    if(val === 'jyoti') {
        window.location.href = 'proposal.html';
    } else {
        document.getElementById('error-msg').classList.remove('hidden');
    }
}

function dodge() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.position = 'fixed'; // Ensures it actually moves
}

function initiateSuccess() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    // Hide the main content
    document.querySelector('.glass-wrapper').style.opacity = '0';
    
    setTimeout(() => {
        document.querySelector('.glass-wrapper').style.display = 'none';
        const letterOverlay = document.getElementById('final-letter-overlay');
        letterOverlay.classList.remove('hidden');
        letterOverlay.style.display = 'flex'; // Force visibility
        showEmotionalLetter();
    }, 1000);
}

function showEmotionalLetter() {
    const text = "Dearest Jyoti (Motu), ❤️ \n\nI wrote this code because words sometimes fail to describe how much you mean to me. You are the perfect logic in my chaotic world. Every 'Yes' from you is a successful build in my life. I promise to be the one who fixes your bugs, shares your snacks, and loves you forever.";
    const target = document.getElementById('letter-body');
    let i = 0;
    target.innerHTML = "";

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
            i++;
            setTimeout(type, 45); // Smooth typewriter speed
        }
    }
    type();
}
function showEmotionalLetter() {
    const text = "Dearest Jyoti (Motu), ❤️ \n\n" +
        "You are the red rose in my garden of life. " +
        "Today, I didn't just write code; I wrote my heart out for you. \n\n" +
        "Thank you for being my constant, my joy, and my 'Motu'. " +
        "I promise to keep this website live forever, just like my love for you.";

    const target = document.getElementById('letter-body');
    let i = 0;
    target.innerHTML = "";
    target.style.color = "#C21E56"; // Rose Red Text
    target.style.fontWeight = "bold";

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}
