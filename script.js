const output = document.getElementById('output');
const input = document.getElementById('input');

let gameState = {
    level: 0,
    attempts: 0
};

const levels = [
    {
        type: 'riddle',
        story: "You're in. The first firewall is weak. It relies on a simple riddle for authentication.",
        puzzle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
        answer: "a map"
    },
    {
        type: 'riddle',
        story: "That was too easy. The next layer seems to be a personal security question. The CEO is a bit of a foodie, it seems.",
        puzzle: "What has to be broken before you can use it?",
        answer: "an egg"
    },
    {
        type: 'pattern',
        story: "Interesting. You've found a system note: 'Password policy requires the new password to be a 6-letter word that starts and ends with the same letter.' The system logs show the last password was related to a mythical beast.",
        puzzle: "Enter the password (a 6-letter word, starts and ends with the same letter, mythical beast).",
        answer: "dragon"
    },
    {
        type: 'cipher',
        story: "You've stumbled upon an encrypted file. The encryption seems to be a simple Caesar cipher (ROT13). Decrypt the message to find the password.",
        puzzle: "Ciphertext: 'gur svany cnegf bs gur chmmyr'",
        answer: "the final parts of the puzzle"
    },
    {
        type: 'riddle',
        story: "The final layer. The CEO's personal password. It's said he's a bit of a narcissist.",
        puzzle: "What has a neck without a head, and a body without legs?",
        answer: "a bottle"
    }
];

function print(text) {
    output.innerHTML += text + '\n';
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    output.innerHTML = '';
}

function showIntro() {
    clearOutput();
    gameState.level = 0;
    gameState.attempts = 0;
    print("Welcome, Cyber Informer.");
    print("Your mission: Unmask the corrupt CEO of OmniCorp.");
    print("You've found a vulnerable terminal. This is your only way in.");
    print("Bypass the security layers to expose the truth.");
    print("Type 'start' to begin.");
}

function startGame() {
    gameState.level = 0;
    gameState.attempts = 0;
    showPuzzle();
}

function showPuzzle() {
    if (gameState.level < levels.length) {
        const currentLevel = levels[gameState.level];
        clearOutput();
        print(`Security Layer ${gameState.level + 1} of ${levels.length}`);
        print("--------------------");
        print(currentLevel.story);
        print("\n" + currentLevel.puzzle);
    } else {
        showVictory();
    }
}

function showVictory() {
    clearOutput();
    print("ACCESS GRANTED.");
    print("--------------------");
    print("CEO's Identity: REVEALED.");
    print("Name: Alistair Finch");
    print("Status: Exposed.");
    print("You've done it, Cyber Informer. The mask is off.");
    print("The truth is out.");
    print("Type 'restart' to play again.");
}

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        input.value = '';

        if (command === 'start' && gameState.level === 0) {
            startGame();
        } else if (command === 'restart') {
            showIntro();
        } else if (gameState.level < levels.length) {
            checkAnswer(command);
        }
    }
});

function checkAnswer(answer) {
    const currentLevel = levels[gameState.level];
    let isCorrect = false;

    switch (currentLevel.type) {
        case 'riddle':
        case 'pattern':
        case 'cipher':
            isCorrect = (answer === currentLevel.answer);
            break;
    }


    if (isCorrect) {
        gameState.level++;
        gameState.attempts = 0;
        print("\nAccess granted. Proceeding to next layer...");
        setTimeout(showPuzzle, 2000);
    } else {
        gameState.attempts++;
        print("\nAccess denied. Incorrect password.");
        if (gameState.attempts >= 3) {
            print("Too many failed attempts. Connection terminated.");
            setTimeout(showIntro, 2000);
        }
    }
}

showIntro();
