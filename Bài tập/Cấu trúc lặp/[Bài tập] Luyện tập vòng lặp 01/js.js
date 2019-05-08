function countNumber(){
    let result = "";
    for(let i = 1; i < 101; i++){
        result += i + "  ";
        if (i === 99) alert("Đã hoàn thành!");
    }
    document.getElementById("result").innerHTML = result;
}   

function temperature(){
    let temp = parseFloat(prompt("Nhập nhiệt độ"));
    while (temp < 20 || temp > 100){
        temp = parseFloat(prompt("Nhập nhiệt độ"));
    }
    alert("Nhiệt độ bình thường!")
}

function fibonacci(n){
    return (n === 1)?1:(n === 2)?2:(fibonacci(n-1) + fibonacci(n-2));
}

function soFibonacci(){
    let number = parseInt(prompt("Nhập số số Fibonacci"));
    let result = "";
    for(let i = 1; i <= number; i++) {
        result += "  " + fibonacci(i);
    }
    document.getElementById("resultFib").innerHTML = result;
}

function fibonaccidivi5(){
    let fib;
    let i = 1;
    while(1){
        fib = fibonacci(i);
        if (fib % 5 === 0){
            alert("Số fibonacci đầu tiên chia hết cho 5 là: " + fib);
            break;
        }
        i++  
    }
}

function sumFibonacci20(){
    let fib = 0;
    for(let i = 1; i <= 20; i++) {
        fib += fibonacci(i);
    }
    alert("Tổng 20 số Fibonacci đầu tiên là: " + fib);
}

function sum30Divi7(){
    let sum = 0;
    let count = 0;
    let i = 0;
    while(count < 30){

        if(i % 7 === 0){
            sum += i;
            count++;
        } 

        i++;
    }
    alert("Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là " + sum);
}

function fizzBuzz(){
    let result = "Kết quả là : ";
    for(let i = 1; i <= 100; i++){
        if (i % 3 ===0) result +="Fizz  ";
        else if (i % 5 == 0) result += "Buzz  ";
             else if (i % 3 === 0 && i % 5 === 0) result += "FizzBuzz  ";
                  else result += i + "  ";
    }
    document.getElementById("resultfizzbuzz").innerHTML = result;
}