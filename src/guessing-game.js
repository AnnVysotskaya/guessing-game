class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middle = Math.ceil((this.max+this.min)/2);
        return this.middle;
    }

    lower() {
        this.setRange(this.min, this.middle);
    }

    greater() {
        this.setRange(this.middle, this.max);
    }
}

module.exports = GuessingGame;
