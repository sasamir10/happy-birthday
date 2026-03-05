const name = "Ariana";
const bgMusic = document.getElementById("bgMusic");
const revealBtn = document.getElementById("reveal");

document.getElementById("name").innerText = name;

// Enable button to click Reveal Button
revealBtn.addEventListener(
    "click",
    () => {
        bgMusic.play().catch(() => console.log("Music play failed"));
    },
    { once: true },
);

const quotes = [
    "I saved my wish for the very last moment so yours can be the one that stays with you after crowd fades - Happy Birthday, My Love😊",
    "May you Fullfil your all Dreams💖",
    "Keep shine like a Diamond Sky✨",
    "And really! You'll never find a Rainbow if you remain looking down.",
    "But you know you're something brighter than Rainbow.",
    "Again Happy Birthday to you",
    "Signing Out - SAMIR🤗",
];

let speed = [5.6, 6.8, 6, 7, 7.6, 6, 5, 6.6, 8, 5];
let rain = "";
let number = 5;

for (let i = 0; i < 10; i++) {
    let randomSec = Math.random();
    let duration = speed[i];

    let delay = Math.floor(randomSec * 1) + 1 + Math.floor(randomSec * 5);

    console.log(duration);
    rain += `

    <div class="raindrop"  style="
    left:${number}%;
    animation-duration:${duration}s;
    animation-delay: 0.${delay};
    ">&#127880</div>`;
    number += 10;
}

document.querySelector(".rain-container").innerHTML = rain;

function showSurprise() {
    const surpriseDiv = document.getElementById("surprise");
    surpriseDiv.style.display = "block";

    document.querySelector(".rain-container").classList.add("displayRain");
}

let index = 0;
function showQuote() {
    const quoteBox = document.getElementById("quote-box");
    quoteBox.innerHTML = quotes[index];
    quoteBox.style.display = "block";
    index = (index + 1) % quotes.length; // loops back to start
}
