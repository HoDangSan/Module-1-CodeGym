class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        return (this.weight <= 0) ? false : true;
    }

    getweight() {
        return this.weight;
    }
}
class Human {
    constructor(name, sex, weight) {
        this.name = name;
        this.sex = sex;
        this.weight = weight;
    }

    tall(tall) {
        console.log(tall);
    }

    eat(apple) {
        if (apple.isEmpty()) {
            apple.weight--;
            this.weight++;
        } else {
            location.reload();
            alert("Táo đã bị ăn hết!");
        }
    }
}