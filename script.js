const output = document.getElementById('output');
const input = document.getElementById('input');

let gameState = {
    level: 0,
    attempts: 0
};

const levels = [
    {
        puzzle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
        answer: "a map"
    },
    {
        puzzle: "What has to be broken before you can use it?",
        answer: "an egg"
    },
    {
        puzzle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        answer: "a candle"
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
        clearOutput();
        print(`Security Layer ${gameState.level + 1} of ${levels.length}`);
        print("-------------------- ");
        print("Password required.");
        print("Hint: " + levels[gameState.level].puzzle);
    } else {
        showVictory();
    }
}

function showVictory() {
    clearOutput();
    print("ACCESS GRANTED.");
    print("-------------------- ");
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
    if (answer === levels[gameState.level].answer) {
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
