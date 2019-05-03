let o1 = ["image/img/1-1.jpg","image/img/2-1.jpg","image/img/3-1.jpg","image/img/4-1.jpg"];
let o2 = ["image/img/1-2.jpg","image/img/2-2.jpg","image/img/3-2.jpg","image/img/4-2.jpg"];
let o3 = ["image/img/1-3.jpg","image/img/2-3.jpg","image/img/3-3.jpg","image/img/4-3.jpg"];
let o4 = ["image/img/1-4.jpg","image/img/2-4.jpg","image/img/3-4.jpg","image/img/4-4.jpg"];
let o5 = ["image/img/1-5.jpg","image/img/2-5.jpg","image/img/3-5.jpg","image/img/4-5.jpg"];
let o6 = ["image/img/1-6.jpg","image/img/2-6.jpg","image/img/3-6.jpg","image/img/4-6.jpg"];
let o7 = ["image/img/1-7.jpg","image/img/2-7.jpg","image/img/3-7.jpg","image/img/4-7.jpg"];
let o8 = ["image/img/1-8.jpg","image/img/2-8.jpg","image/img/3-8.jpg","image/img/4-8.jpg"];
let o9 = ["image/img/1-9.jpg","image/img/2-9.jpg","image/img/3-9.jpg","image/img/4-9.jpg"];
function getIndexByImg(valueimg,o){   // hàm lấy chỉ số của mảng theo src img
    let indeximg;
    for(var i=0; i<4 ;i++){
        if (valueimg === o[i]){
            indeximg = i;
        }
    }
    return indeximg;
}
function getRndInteger(min, max) {   // Hàm lấy giá trị một số tự nhiên ngẫu nhiên trong khoảng từ min đến max 
    return Math.floor(Math.random() * (max - min)) + min;           
}
function getRndimg(min,max,img){   // hàm lấy giá trị số tự nhiên ngẫu nhiên trong khoảng min đến max loại trừ số img
    let y = getRndInteger(min,max);
    return ((y !== img) ? y : getRndimg(min,max,img));
}
function ReturnSRC(idimg,o){            // hàm thay đổi hình ảnh ngẫu nhiên khi click vào img có id là idimg
    let valueimg = document.getElementById(idimg).alt; // lấy alt
    console.log(valueimg);
    let indexing = getIndexByImg(valueimg,o); // Lấy chỉ số trong ô mảng tương ứng với giá trị của alt với o[i]
    result = getRndimg(0,4,indexing); //lấy số ngẫu nhiên trong khoang 0-3 
    console.log(result);
    document.getElementById(idimg).src = o[result];
    document.getElementById(idimg).alt = o[result]; 
    test();          
}   
function test (){
    let SumValue = document.getElementById("1").alt + document.getElementById("2").alt + document.getElementById("3").alt + 
    document.getElementById("4").alt + document.getElementById("5").alt +
    document.getElementById("6").alt + document.getElementById("7").alt + 
    document.getElementById("8").alt + document.getElementById("9").alt;
    let hinh1 = o1[0] + o2[0] + o3[0] + o4[0] + o5[0] + o6[0] + o7[0] + o8[0] +  o9[0];
    let hinh2 = o1[1] + o2[1] + o3[1] + o4[1] + o5[1] + o6[1] + o7[1] + o8[1] +  o9[1];
    let hinh3 = o1[2] + o2[2] + o3[2] + o4[2] + o5[2] + o6[2] + o7[2] + o8[2] +  o9[2];
    let hinh4 = o1[3] + o2[3] + o3[3] + o4[3] + o5[3] + o6[3] + o7[3] + o8[3] +  o9[3];
    console.log(SumValue);
    console.log(hinh1);
    let KQ = (SumValue === hinh1)?"You<br>Win<br><button class='button' onclick=(choilai())>Chơi lại</button>":(SumValue === hinh2)?"You<br>Win<br><button class='button' onclick=(choilai())>Chơi lại</button>":(SumValue === hinh3)?"You<br>Win<br><button class='button' onclick=(choilai())>Chơi lại</button>":(SumValue === hinh4)?"You<br>Win<br><button class='button' onclick=(choilai())>Chơi lại</button>":"<img src='image/lad.png' width=300px;>";
    document.getElementById("kq").innerHTML = KQ;
}
function choilai(){
    location.reload();
}
function doReady(){
    document.getElementById("1").onclick = function(){ ReturnSRC("1",o1);}
    document.getElementById("2").onclick = function(){ ReturnSRC("2",o2);}
    document.getElementById("3").onclick = function(){ ReturnSRC("3",o3);}
    document.getElementById("4").onclick = function(){ ReturnSRC("4",o4);}
    document.getElementById("5").onclick = function(){ ReturnSRC("5",o5);}
    document.getElementById("6").onclick = function(){ ReturnSRC("6",o6);}
    document.getElementById("7").onclick = function(){ ReturnSRC("7",o7);}
    document.getElementById("8").onclick = function(){ ReturnSRC("8",o8);}
    document.getElementById("9").onclick = function(){ ReturnSRC("9",o9);}

}       