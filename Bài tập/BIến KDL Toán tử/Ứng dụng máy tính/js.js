function caculatorc(){
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;
    let a1 = parseFloat(a);
    let b1 = parseFloat(b);
    let result = a1 + b1;
    document.getElementById("namecaculator").innerHTML = " Addition : ";
    document.getElementById("result").innerHTML = result;
    event.preventDefault();
  }
  function caculatort(){
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;
    let a1 = parseFloat(a);
    let b1 = parseFloat(b);
    let result = a1 - b1;
    document.getElementById("namecaculator").innerHTML = " Suctraction : ";
    document.getElementById('result').innerHTML = result;
    event.preventDefault();
  }
  function caculatorn(){
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;
    let a1 = parseFloat(a);
    let b1 = parseFloat(b);
    let result = a1 * b1;
    document.getElementById("namecaculator").innerHTML = " Multiplication : ";
    document.getElementById('result').innerHTML = result;
    event.preventDefault();
   }
  function caculatorch(){
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;
    let a1 = parseFloat(a);
    let b1 = parseFloat(b);
    let result = a1 / b1;
    document.getElementById("namecaculator").innerHTML = " Division : ";
    document.getElementById('result').innerHTML = result;
    event.preventDefault();
  } 