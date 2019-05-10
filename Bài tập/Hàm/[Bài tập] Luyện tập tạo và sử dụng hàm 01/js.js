function ready(){
    document.getElementById("bai1ShowAlert").onclick = function(){
        alertMessage();
    }

    document.getElementById("bai2ShowNumber").onclick = function(){
        let num = parseInt(prompt("Enter number: "));
        alert(increaseNumber(num));
    }

    document.getElementById("bai3ShowResultNumber").onclick = function(){
        let num1 = parseInt(prompt("Enter first number: "));
        let num2 = parseInt(prompt("Enter second number: "));
        testNumber(num1,num2);
    }

    document.getElementById("bai4TestFunction").onclick = function(){
        result = 0;
        alert(result);
        result = addNumbers(); 
        alert(result);
    }

    document.getElementById("enterValueStar").onclick = function(){
        let star = ["Polaris", "Aldebaran", "Deneb", "Vega"," Altair", "Dubhe", "Regulus"];
        let constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major" ," Leo"];
        let enterstar = prompt("Enter Value Star :");
        findTheStar(enterstar,star,constellation);
    }

}
function alertMessage(){
    alert("Xin chao");
}
function increaseNumber(num){
    return num + 1;
}
function testNumber(num1,num2){
    return (num1 > num2) ? alert("the first number larger than the second!") : alert("Total number: " + (num1 + num2));
}
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
function findTheStar(value,star,constellation){
    for (let i = 0; i < star.length; i++) {
        if (star[i] === value) return alert("Relative constellation is: " + constellation[i]);
        else return alert("No stars found");  
    }
}
