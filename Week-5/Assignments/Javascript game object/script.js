class Game {
    constructor() {
        this._lives = 3;
        this._coins = 0;
    }

    get points() {
        return this._coins * 10;
    }

    playerDies() {
        if (this._lives > 0) {
        this._lives--;
        }
    }

    newGame() {
        this._lives = 3;
        this._coins = 0;
    }

    get lives() {
        return this._lives;
    }

    get coins() {
        return this._coins;
    }

    set coins(value) {
        this._coins = value;
    }
}

const game = new Game();

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0