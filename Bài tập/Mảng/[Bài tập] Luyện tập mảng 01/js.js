function ready(){
    document.getElementById("bai1").onclick = function(){
        let arrNumber = [];
        let count = 0;
        for (let i = 0; i < 10; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
            if (arrNumber[i] >= 10) count++;
        }
        alert("Có " + count + " số lớn hơn 10");
    }

    document.getElementById("bai2").onclick = function(){
        let arrNumber = [];
        for (let i = 0; i < 10; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
        }
        let max = arrNumber[0];
        let index = 0;
        for (let i = 0; i < 10; i++){
            if (max < arrNumber[i]) max = arrNumber[i];
        }
        for (let i = 0; i < 10; i++){
            if (max = arrNumber[i]) index = i;
        }
        alert("Giá trị lớn nhất trong mảng là " + max + " và nó ở vị trí " + index );
    }
    
    document.getElementById("bai3").onclick = function(){
        let arrNumber = [];
        let sum = 0;
        for (let i = 0; i < 5; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
            sum += arrNumber[i];
        }
        alert("Giá trị trung bình của mảng là " + sum/5);
    }

    document.getElementById("bai4").onclick = function(){
        let arrNumber = [];
        for (let i = 0; i < 5; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
        }
        alert("Mảng chưa đảo ngược: " + arrNumber.join(""));
        arrNumber.reverse();
        alert("Mảng đã được đảo ngược: " + arrNumber.join(""));
    }

    document.getElementById("bai5").onclick = function(){
        let arrNumber = [];
        let count = 0;
        for (let i = 0; i < 5; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
            if (arrNumber[i] < 0) count++;
        }
        alert("Chuỗi số là " + arrNumber.join(""));
        alert("Số số nguyên âm trong chuỗi là " + count);
    }

    document.getElementById("bai6").onclick = function(){
        let arrNumber = [];
        for (let i = 0; i < 10; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
        }
        let V = parseInt(prompt("Nhập V"));
        count = 0;
        for (let i = 0; i < 10; i++){
            if (V === arrNumber[i]) count ++;               
        }
        if (count > 0) alert("V is in the array");
        else alert("V is not in the array");
    }

    document.getElementById("bai7").onclick = function(){
        let arrNumber = [];
        for (let i = 0; i < 10; i++){
            arrNumber[i] = parseInt(prompt("Nhập mảng"));
        }
        alert("Mảng Vừa nhập là: " + arrNumber.join(""));
        let V = parseInt(prompt("Nhập V"));
        for (let i = 0; i < 10; i++){
            if (arrNumber[i] === V) arrNumber.splice(i,1);
        }
        alert("Mảng đã xóa " + V + " ra khỏi mảng và đây là kết quả " + arrNumber.join(""));
    }   
}