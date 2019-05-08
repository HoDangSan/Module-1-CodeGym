function legacy(){
    let number = parseInt(document.getElementById("number").value);
    let result = 1;
    for (let i = 1; i <= number; i++){
        result *= i;
    }
    alert("legary of " + number + " is " + result);
}

function rectangle(){
    
    let height = parseInt(document.getElementById("height").value);
    let width = parseInt(document.getElementById("width").value);
    result = "";
    for (let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            if(i > 1 && i < height && j > 1 && j < width)
                result += "&ensp;&ensp;";
            else result += "*&nbsp;&nbsp;";
        }
        result += "<br>"
    }
    document.getElementById("result").innerHTML = result;
}