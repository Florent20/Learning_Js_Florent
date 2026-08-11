let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");


guessBtn.addEventListener("click", function () {

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {

        message.textContent = "Please enter a number between 1 and 100.";

        return;
    }

    attempts++;

    attemptsDisplay.textContent = attempts;


    if (guess === randomNumber) {

        message.textContent =
            `🎉 Congratulations! You found the number in ${attempts} attempts.`;

        guessBtn.disabled = true;
        guessInput.disabled = true;

    } else if (guess < randomNumber) {

        message.textContent = "📉 Too low! Try again.";

    } else {

        message.textContent = "📈 Too high! Try again.";

    }

});


restartBtn.addEventListener("click", function () {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsDisplay.textContent = attempts;

    message.textContent = "";

    guessInput.value = "";

    guessInput.disabled = false;

    guessBtn.disabled = false;

});