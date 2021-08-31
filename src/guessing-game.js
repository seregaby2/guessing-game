class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max
        this.min = min
    }

    guess() {
     return  this.mid = Math.round((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.mid
    }

    greater() {
        this.min = this.mid
    }
}

module.exports = GuessingGame;
