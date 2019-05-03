function doSomething(){
    let th = document.getElementById('month');
    let x = parseInt(th.value);
    let result;
    switch (x) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('showResult').style.display = 'block';
            document.getElementById('err').style.display = 'none';
            result = "31";
            break;
        case 2:
            document.getElementById('showResult').style.display = 'block';
            document.getElementById('err').style.display = 'none';    
            result = "28 hoặc 29";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('showResult').style.display = 'block';
            document.getElementById('err').style.display = 'none';
            result = "31";
            break;
        default:
            document.getElementById('err').innerHTML = "Số nhập vào không phải là tháng. Vui lòng nhập lại!";
            document.getElementById('showResult').style.display = 'none';
            document.getElementById('err').style.display = 'block';
            break;
    }
    document.getElementById('resultMonth').innerHTML = x;
    document.getElementById('resultDay').innerHTML = result;
}
document.getElementById('enforcement').addEventListener("click",doSomething);      