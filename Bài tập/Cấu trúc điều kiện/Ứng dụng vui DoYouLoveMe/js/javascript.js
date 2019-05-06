function getRdn(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}



document.getElementById("khong").onmouseover = function(){
    let element = document.getElementById("khong");
    element.style.top = parseInt(element.style.top) + getRdn(300,600) + 'px';
    element.style.top = parseInt(element.style.top) - getRdn(300,600) + 'px';
    element.style.left = parseInt(element.style.left) + getRdn(300,600) + 'px';
    element.style.left = parseInt(element.style.left) - getRdn(300,600) + 'px';

    console.log(element.style.top);
    console.log(element.style.left);
}
document.getElementById("co").onclick = function (){
    alert("<3");
}