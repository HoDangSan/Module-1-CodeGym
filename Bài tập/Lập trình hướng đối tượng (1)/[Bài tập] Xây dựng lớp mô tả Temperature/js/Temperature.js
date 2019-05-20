function Temperature(c) {
    this.c = c;

    this.cToF = function() {
        let c0 = this.c;
        return (9 * c0) / 5 + 32;
    }

    this.cToH = function() {
        let c1 = this.c;
        return c1 + 273.15;
    }
}