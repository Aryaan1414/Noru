// script.js
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const popup = document.getElementById("popup");
    const message = document.getElementById("message");
    const nextButton = document.getElementById("nextButton");
    const inputField = document.getElementById("inputField");

    const messages = [
        "Heyy Stranger..... I DONT KNOW HOW THAT SHIT WORKED, THAT WAS SO CRINGE YUCK EW ",
        "I've got a quick question for you!",
        "It is so serious like one a guy only asks a special someone",
        "FUCK ME YOURE MAKING ME CRINGE",
        "OKAY I ASK IT NOW ...",
        "How tf are you this fucking small",
        "I hate you too",
        "VERY SMALL FUCK U",
        "onto serious cringe long message moment",
        "Okay how do I start, Norinne Norinne you are incredible, you make me run of out of words",
        "Because I can Yap ",
        "A lot",
        "I dont feel like normal with you and thats weird, scary, and odd but I DONT WANT TO STOP FHSKDNSBGKSFJBGJSBG",
        "ABDFJIBFIBGIBIBSBGSIGSBGS, no fuck off i like you okay so onto more important stuff",
        "WTF IS YOUR PHONE NUMBER CHLORINE ??????? 📞 and send a screenshot or else ill kill you(also connecting to backend and sending myself whatever you imput here will take too long so just send me on insta :/"
    ];

    let messageIndex = 0;
    let hasAskedForNumber = false;

    // Initially hide the popup
    popup.style.display = "none";

    startButton.addEventListener("click", () => {
        popup.style.display = "flex";
        displayMessage();
    });

    nextButton.addEventListener("click", () => {
        if (hasAskedForNumber) {
            const phoneNumber = inputField.value;
            if (phoneNumber) {
                sendEmail(phoneNumber);
                inputField.classList.add("hidden");
                askOut();
            } else {
                alert("Please enter your number!");
            }
        } else {
            messageIndex++;
            if (messageIndex < messages.length) {
                displayMessage();
            } else {
                requestNumber();
            }
        }
    });

    function displayMessage() {
        message.textContent = messages[messageIndex];
    }

    function requestNumber() {
        hasAskedForNumber = true;
        message.textContent = "Please enter your number!";
        inputField.classList.remove("hidden");
    }

    function sendEmail(number) {
        console.log("Number submitted:", number);
        alert("Your number has been received! 📲");
    }

    function askOut() {
        message.textContent = "Will you go on a date with me? (I WILL KILL YOU IF YOU SAY NO, but like press no because i have that covered as well";
        nextButton.textContent = "Yes";
        nextButton.onclick = celebrate;

        const noButton = document.createElement("button");
        noButton.textContent = "No";
        noButton.onclick = recursiveNo;
        noButton.style.marginLeft = "10px";
        nextButton.after(noButton);
    }

    function celebrate() {
        // Hide the popup and change body content
        popup.classList.add("hidden");
        document.body.innerHTML = "<h1 style='color: #fff; text-align:center; font-size: 5rem;'>YAY! I HATE YOU 🎉🎊</h1>";

        // Confetti animation
        for (let i = 0; i < 300; i++) {
            createConfetti();
        }

        // Fullscreen color flashing effect
        const colors = ["#6c5ce7", "#a29bfe", "#fd79a8", "#ffeaa7", "#00b894", "#ff7675"];
        setInterval(() => {
            document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }, 150);
    }


    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        // Randomly position the confetti
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
        confetti.style.opacity = Math.random();

        // Remove confetti from DOM after animation
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }

    function recursiveNo() {
        alert("Wrong answer! Try again. 😉");
        askOut();
    }
});