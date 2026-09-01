document.addEventListener("DOMContentLoaded", () => {
    const envelopeSection = document.getElementById("envelope-section");
    const letterSection = document.getElementById("letter-section");
    const btnOpen = document.getElementById("btn-open");
    const btnBack = document.getElementById("btn-back");
    const btnContinue = document.getElementById("btn-continue");
    const floatingContainer = document.getElementById("floating-container");

    let particleInterval;
    function createParticle() {
        const particle = document.createElement("i");
        particle.classList.add("fa-solid", "fa-heart", "particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.fontSize = Math.random() * 15 + 10 + "px";
        particle.style.animationDuration = Math.random() * 3 + 3 + "s";
        floatingContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }

    function openLetter() {
        envelopeSection.style.display = "none";
        letterSection.style.display = "block";
        
        particleInterval = setInterval(createParticle, 300);
    }
    function closeLetter() {
        letterSection.style.display = "none";
        envelopeSection.style.display = "flex";
        
        clearInterval(particleInterval);
        floatingContainer.innerHTML = "";
    }

    if (btnOpen) btnOpen.addEventListener("click", openLetter);
    if (envelopeSection) {
        const envBox = envelopeSection.querySelector(".envelope-box");
        if (envBox) envBox.addEventListener("click", openLetter);
    }

    if (btnBack) btnBack.addEventListener("click", closeLetter);

    if (btnContinue) {
        btnContinue.addEventListener("click", () => {
            alert("Terima kasih sudah selalu ada buat aku! I love you so much ❤️");
        });
    }
});