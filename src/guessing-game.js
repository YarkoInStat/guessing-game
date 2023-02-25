class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessDigit = Math.round((this.min + this.max) / 2)
        return this.guessDigit
    }

    lower() {
        this.max = this.guessDigit
    }

    greater() {
        this.min = this.guessDigit
    }
}

module.exports = GuessingGame;
