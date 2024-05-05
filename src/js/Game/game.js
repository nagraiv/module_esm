import Character from "../Domain/domain.js";

const myCharacter = new Character();

export default class Game {
    start() {
        console.log('game started');
    }
}

export class GameSavingData {
    constructor() {
        console.log('GameSavingData works!');
    }
}

export function readGameSaving() {
    console.log('readGameSaving executed!');
}

export function writeGameSaving() {
    console.log('writeGameSaving executed!');
}
