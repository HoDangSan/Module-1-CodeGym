function ready(){

}
function convert(){
        let c = parseFloat(document.getElementById("c").value);
        let objC = new Temperature(c);
        document.getElementById("cToF").innerHTML = objC.cToF() + " F";
        document.getElementById("cToK").innerHTML = objC.cToH() + " K";
}
