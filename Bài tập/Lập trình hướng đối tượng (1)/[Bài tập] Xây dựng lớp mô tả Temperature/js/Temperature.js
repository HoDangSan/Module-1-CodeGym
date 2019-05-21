class Temperature {
    constructor(c) {
        this.c = c;
    }

    cToF() {
        let c0 = this.c;
        return (9 * c0) / 5 + 32;
    }

    cToH() {
        let c1 = this.c;
        return c1 + 273.15;
    }
}