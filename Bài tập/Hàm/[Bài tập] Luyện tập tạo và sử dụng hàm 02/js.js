function ready(){
    document.getElementById("getSquareNumber").onclick = function(){
        let num = parseInt(prompt("Enter Number: "));
        alert("Squares of " + num + " is " + getSquareNumber(num));
    }

    document.getElementById("circumferenceCircle").onclick = function(){
        let radius = parseFloat(prompt("Enter radius: "));
        alert("Diameter Of Circle" + getDiameterOfCircle(radius));
    }

    document.getElementById("AreaCircle").onclick = function(){
        let radius = parseFloat(prompt("Enter radius: "));
        alert("Area Of Circle" + getAreaCircle(radius));
    }

    document.getElementById("getFactorial").onclick = function(){
        let num = parseInt(prompt("Enter Number: "));
        alert(getFactorial(num));
    }

    document.getElementById("getTypeOfNumber").onclick = function(){
        let num = parseInt(prompt("Enter Number: "));
        alert(getTypeOfNumber(num));
    }

    document.getElementById("getMin").onclick = function(){
        let num1 = parseInt(prompt("Enter Number 1: "));
        let num2 = parseInt(prompt("Enter Number 2: "));
        let num3 = parseInt(prompt("Enter Number 3: "));
        alert("Min is " + getMinNumber(num1,num2,num3));
    }

    document.getElementById("getIsNumber").onclick = function(){
        let num = parseInt(prompt("Enter Number: "));
        alert(testNumber(num));
    }

    document.getElementById("getConvertTwoNumber").onclick = function(){
        let num1 = prompt("Enter Number 1: ");
        let num2 = prompt("Enter Number 2: ");
        alert(num1 + num2);
        alert(convertTwoNumber(num1,num2));
    }

    document.getElementById("convertArray").onclick = function(){
        let arr = ["Anh","cần","Em"];
        alert(arr.join(" "));
        let arrConvert = convertArray(arr);
        alert(arrConvert.join(" "));   
    }
}

function getSquareNumber(num){
    return num**2;
}

function getDiameterOfCircle(radius){
    return 2 * radius * 3.14;
}

function getAreaCircle(radius){
    return 3.14 * radius**2;
}

function getFactorial(num){
    return (num <= 0 ) ? 0 : (num === 1) ? 1 : num*getFactorial(num -1);
}

function getTypeOfNumber(num){
    return (typeof(num) === "number") ? true : false;
}

function getMinNumber(num1,num2,num3){
    let min = num1;
    if (min > num2) min = num2;
    else if (min > num3) min = num3;
    return min;
}

function testNumber(num){
    return (num >= 0) ? true : false;
}

function convertTwoNumber(num1,num2){
    return num2 + num1;
}

function convertArray(array){
    array.reverse();
    return array;
}
