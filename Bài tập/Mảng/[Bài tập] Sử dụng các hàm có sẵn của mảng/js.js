function ready(){
    let array = [];
    document.getElementById("addAndShow").onclick = function(){
        let value = document.getElementById("value");
        let valueResult = value.value;
        array[array.length] = valueResult;
        document.getElementById("valueArr").innerHTML = array.join("");
        document.getElementById("replace").innerHTML = "<input type='text' id='value'>";
    }

    document.getElementById("convertArr").onclick = function(){
        let str = array.join("");
        let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let LOWER = 'abcdefghijklmnopqrstuvwxyz';
        let result = [];
        for(let x=0; x<str.length; x++)
        {
            if(UPPER.indexOf(str[x]) !== -1)
                result.push(str[x].toLowerCase());
            else if(LOWER.indexOf(str[x]) !== -1)
                    result.push(str[x].toUpperCase());
                else 
                    result.push(str[x]);
        }
        document.getElementById("reverseArr").innerHTML = result.join("");
    }

    document.getElementById("enterNumber").onclick = function(){
        let str = prompt("Enter number:");
        const result = [str[0]];
        for(let x=1; x<str.length; x++){
            if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
                result.push('-', str[x]);
            else
                result.push(str[x]);
        }
        document.getElementById("number").innerHTML = result.join('');
    }
}