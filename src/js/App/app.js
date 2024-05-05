import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "../Game/game.js";

console.log('app.js module executed');

const game = new Game();
game.start();

const gameData = new GameSavingData();

loadGame();
saveGame();
