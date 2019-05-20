let Apple = function() {
    this.weight = 10;
    this.decrease = function() {
        this.weight--;
    }
    this.isEmpty = function() {
        return (this.weight <= 0) ? false : true;
    }
    this.getweight = function() {
        return this.weight;
    }
}
let Human = function(name, sex, weight) {
    this.name = name;
    this.sex = sex;
    this.weight = weight;
    this.tall = function(tall) {
        console.log(tall);
    }
    this.eat = function(apple) {
        if (apple.isEmpty()) {
            apple.weight--;
            this.weight++;
        } else {
            location.reload();
            alert("Táo đã bị ăn hết!");
        }
    }
}