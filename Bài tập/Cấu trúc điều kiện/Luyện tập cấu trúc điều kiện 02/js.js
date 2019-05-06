function convertCtoF(){
    let c = parseFloat(document.getElementById("c").value);
    let result = c *  9/5 + 32;
    alert(result);
}
function convertMtoF(){
    let m = parseFloat(document.getElementById("m").value);
    let result = m * 3.2808;
    alert("feet = " + result);
}
function dtHinhVuong(){
    let canh = parseFloat(document.getElementById("canh").value);
    let result = canh**2;
    alert("Diện tích hình vuông có cạnh " + canh + "m là " + result);
}
function dtHinhchunhat(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    result = a*b;
    alert("diện tích hình chữ nhật có hai canh " + a + " và " + b + " là " + result);
}

function dientichTamgiac(){
    let a = parseFloat(document.getElementById("a1").value);
    let b = parseFloat(document.getElementById("b1").value);
    result = (a*b)/2;
    alert("diện tích hình tam giác vuông có 2 cạnh " + a + " và "+b+" là " + result);
}

function ptBac1(){
    let a = parseFloat(document.getElementById("a2").value);
    let b = parseFloat(document.getElementById("b2").value);
    result = (a===0)?(b===0)?"pt vô số nghiệm":"pt vô nghiệm":"phương trình có nghiệm "+(-b/a);
    alert(result);
}

function ptBac2(){
    let a = parseFloat(document.getElementById("a3").value);
    let b = parseFloat(document.getElementById("b3").value);
    let c = parseFloat(document.getElementById("c3").value);
    let delta = b*b-4*a*c;
    if(a===0) alert((b===0)?(c===0)?"pt vô số nghiệm":"pt vô nghiệm":"phương trình có nghiệm "+(-b/c));
    else if (delta<0) alert("pt vô nghiệm");
         else if (delta === 0) alert("Phương trình có nghiệm kép: " + -b/(2*a));
              else alert("Phương trình có 2 nghiệm x1 = "+ (-b + Math.sqrt(delta))/(2*a)+" x2 = " +(-b + Math.sqrt(delta))/(2*a));
}

function ktTuoi(){
    let tuoi = parseInt(document.getElementById("tuoi").value);
    result = (tuoi<120 && tuoi>0)?"Đó là tuổi của một người":"Đó không phải là tuổi của một người";
    alert(result);
}    
    
function ktCanh(){
    let a = parseFloat(document.getElementById("a4").value);
    let b = parseFloat(document.getElementById("b4").value);
    let c = parseFloat(document.getElementById("c4").value);
    result = (a>0 && b>0 && c>0 && (a+b)>c && (b+c)>a && (a+c)>b)?"a,b,c là 3 cạnh của một tam giác":"a,b,c không phải là 3 cạnh của một tam giác";
    alert(result);
}

function tinhGiadien(){
    let sochu = parseFloat(document.getElementById("sochu").value);
    result = (sochu > 401) ? sochu * 2.587 : (sochu >= 301) ? sochu * 2.503 : (sochu >= 201) ? sochu * 2.242 : (sochu >= 101) ? sochu * 1.768 : (sochu >= 51) ? sochu * 1.533 : sochu * 1.484;
    alert(result);
}

