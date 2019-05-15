let Apple = function(){
    this.weight = 10;
}
let Human = function(){
    this.name = "Adam";
    this.sex = "Nam";
    this.weight = 50;
    this.tall = function(){
        console.log("I'm Adam! I am a human");
    }
    this.eatApple = function(apple){
        if (apple.weight > 0)
            apple.weight--;
            this.weight++;
    }
}