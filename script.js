const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const instruction = document.getElementById("instruction");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const stars = document.getElementById("stars");
const music = document.getElementById("music");

let isOpen = false;
let typingTimer = null;

const loveLetter = `Happy 21st Monthsary, my darling/baby/bebi/asawa! 

Can you believe it? We have been together for 1 year and 9 months, hindi natin akalaing napakalayo na natin diba baby haha, sobrang saya ko kasi ikaw yung
partner ko at niligawan ko, hinding hindi ako magsasawang suportahan at samahan ka sa kahit anong hirap ng buhay baby ko, sobrang daming nangyari pero
hindi ko inisip na iwan ka, sobrang labo na natin dumating sa point, pero deep inside mahal na mahal kita sobra pa sa sobra at sa sarili ko, gusto na
kitang mapangasawa habang buhay, sana hindi tayo sirain ng kahit na sino at paghiwalayin ng kahit na sino, sana wag kang pumayag kasi ako hindi ako
papayag na masira tayo ng kahit na sino hah? tandaan mo yan, mahal na mahal kita always darling ko, mag-iingat ka palagi and goodluck sayo baby. A little
effort lang naman, sana naappreciate mo kahit papaano, happy happy monthsary baby ko, mahal na mahal kita, wag kang magssawa at mapapagod sakin, aanakan kita
soon, wait lang natin tamang time okay? happy motmot again, I love you always and so much asawa ko! ❤️`;

function typeLetter() {
    clearInterval(typingTimer);
    message.textContent = "";

    let index = 0;

    typingTimer = setInterval(() => {
        if (!isOpen || index >= loveLetter.length) {
            clearInterval(typingTimer);
            return;
        }

        message.textContent += loveLetter.charAt(index);
        index++;
    }, 25);
}

function createHearts(amount = 30) {
    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "heart";
        heart.textContent = ["❤️", "💕", "💗", "💖", "♥"][ 
            Math.floor(Math.random() * 5)
        ];

        heart.style.setProperty(
            "--left",
            Math.random() * 100 + "vw"
        );

        heart.style.setProperty(
            "--duration",
            (3 + Math.random() * 4) + "s"
        );

        heart.style.fontSize =
            (14 + Math.random() * 22) + "px";

        heart.addEventListener("animationend", () => {
            heart.remove();
        });

        hearts.appendChild(heart);
    }
}

function createStars(amount = 45) {
    for (let i = 0; i < amount; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDelay = Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}

function toggleLetter() {
    isOpen = !isOpen;
    envelope.classList.toggle("open", isOpen);

    if (isOpen) {
        openBtn.textContent = "Close My Letter 💌";
        instruction.textContent =
            "Every word comes straight from my heart. ❤️";

        typeLetter();
        createHearts(35);

        // Music starts only if music.mp3 exists
        if (music.querySelector("source").getAttribute("src")) {
            music.play().catch(() => {});
        }
    } else {
        openBtn.textContent = "Open My Heart 💌";
        instruction.textContent =
            "Your love letter is waiting for you...";

        clearInterval(typingTimer);
        music.pause();
    }
}

openBtn.addEventListener("click", toggleLetter);


envelope.addEventListener("click", toggleLetter);

createStars();

setInterval(() => {
    if (isOpen) {
        createHearts(2);
    }
}, 1800);