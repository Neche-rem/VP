// YES BUTTON → Go to letter page
const yesBtn = document.getElementById("yesBtn");
if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "letter.html";
    });
}

// NO BUTTON → Run away
const noBtn = document.getElementById("noBtn");
if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}

// Typing Effect
const typedText = document.getElementById("typed-text");

if (typedText) {
    const message = "Happy val my Ify 💖";
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            typedText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 80);
        }
    }

    typeLetter();
}
