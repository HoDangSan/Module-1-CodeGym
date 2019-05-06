function kiemtraab(){
    let a=parseInt(document.getElementById("a").value);
    let b=parseInt(document.getElementById("b").value);
    alert((a%b===0)?"a chia het cho b":"a khong chia het cho b");
}
function kiemtratuoi(){
    let a=parseInt(document.getElementById("tuoi").value);
    alert((a<=0)?"Không phải tuổi":(a<15 )?"Không đủ điều kiện dự thi vào lớp 10":"Đủ điều kiện thi vào lớp 10");
}
function kiemtrasonguyen(){
    let a=parseInt(document.getElementById("ktsonguyen").value);
    alert((a>0?"a>0":(a<0)?"a<0":"0"));
}
function kiemtramax(){
    let a1=parseInt(document.getElementById("a1").value);
    let a2=parseInt(document.getElementById("a2").value);
    let a3=parseInt(document.getElementById("a3").value);
    let max = a1;
    if (max < a2) max = a2;
        else if (max <a3) max = a3;
    alert("Giá trị lớn nhất là " + max);
}
function kiemtradiem(){
    let kt1 = parseFloat(document.getElementById("diemkt1").value);
    let kt2 = parseFloat(document.getElementById("diemkt2").value);
    let kt3 = parseFloat(document.getElementById("diemkt3").value);
    let giuaki= parseFloat(document.getElementById("diemgiuaki").value);
    let cuoiki = parseFloat(document.getElementById("diemcuoiki").value);
    let tongket = (kt1+kt2+kt3+giuaki*2+cuoiki*3)/8;
    alert((tongket>8)?"Giỏi":(tongket<=8)?"Khá":(tongket<=6.5)?"trung bình":(tongket<=5)?"yếu":"kém");

}
function kiemtrahoahong(){
    let doanhso = parseFloat(document.getElementById("doanhso").value);
    alert("Hoa hồng nhận được là " + doanhso*2000000*(10/100));
}
function kiemtratiendt(){
    let noimang = parseFloat(document.getElementById("noimang").value);
    let ngoaimang = parseFloat(document.getElementById("ngoaimang").value);
    alert("Số phút gọi nội mang là " + noimang);
    alert("Số phút gọi ngoại mạng là " + ngoaimang);
    alert("Số tiền phải đóng là " + (850*noimang + 2000*ngoaimang));
}