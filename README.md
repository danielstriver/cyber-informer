# Cyber Informer

A web-based puzzle game created for the Global Game Jam, with the theme "MASK".

## Story

You are a hacker known as the "Cyber Informer". Your mission is to unmask the corrupt CEO of a monolithic corporation called OmniCorp. You've discovered a vulnerable entry point into their network—an old, forgotten terminal. This is your one and only chance to get in and expose the truth.

You must bypass several layers of security by solving puzzles and cracking passwords. Each layer you break through brings you one step closer to revealing the CEO's identity and dismantling their carefully constructed facade.

## How to Play

1.  **Open `index.html` in a web browser.**
2.  The game is played entirely by typing commands into the terminal.
3.  Type `start` to begin your mission.
4.  Each security layer will present you with a riddle or a puzzle. The answer to the puzzle is the password to bypass the layer.
5.  Type your answer into the terminal and press Enter.
6.  If you are correct, you will proceed to the next layer.
7.  If you are incorrect, you can try again. But be careful, too many failed attempts will get you locked out!
8.  Solve all the puzzles to win the game and unmask the CEO.
9.  Type `restart` at any time to start over.

## Deployment

This game is a static website, which means it's very easy to deploy for free. Here are a couple of popular options:

### GitHub Pages

1.  **Create a new public GitHub repository** and upload the game files (`index.html`, `style.css`, `script.js`).
2.  Go to your repository's **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under "Build and deployment", select **Deploy from a branch**.
5.  Choose the `main` branch (or `master`) and the `/root` folder, then click **Save**.
6.  GitHub will build and deploy your site. It will be available at an address like `https://<your-username>.github.io/<your-repository-name>/`.

### Netlify

1.  **Sign up for a free Netlify account.**
2.  Go to your Netlify dashboard and click **Add new site** > **Deploy manually**.
3.  **Drag and drop** the folder containing your game files (`index.html`, `style.css`, `script.js`) into the designated area in the Netlify UI.
4.  Netlify will instantly deploy your site and give you a unique URL (e.g., `random-name-12345.netlify.app`). You can customize this URL in the site settings.

That's it! Now anyone with the link can play your game.
