function ready(){
    let b = document.getElementById("carogame");
    let board = [];
    let data = "";
    //tạo bảng caro ban đầu tiên
    for (let i = 0; i < 5; i++) {
        board[i] = new Array(0, 0, 0, 0, 0);
    }
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/>"
    b.innerHTML = data;
    document.getElementById("changeValue").onclick = function(){
        let positionX = prompt("X: ");
        let positionY = prompt("Y: ");
        data = "";
        board[positionX][positionY] = "x";
        for (let i = 0; i < 5; i++) {
            data += "<br/>";
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        data += "<br/><br/>"
        b.innerHTML = "<hr/>" + data;
    }
}