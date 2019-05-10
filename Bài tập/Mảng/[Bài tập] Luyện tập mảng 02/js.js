function ready(){
    let bai1 = "";
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for(let i in a){
        for(let j in a[i]){
            bai1 += a[i][j];
        }
        bai1 += "<br>"
    }
    console.log(bai1);
    document.getElementById("bai1").innerHTML = bai1;
    
    let bai2 = ['c', 's', 'c', '2', '6', '1'];
    bai2.reverse();
    document.getElementById("bai2").innerHTML = bai2.join("");
}