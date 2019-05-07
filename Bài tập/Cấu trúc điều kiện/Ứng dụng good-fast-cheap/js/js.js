function Test(a){
    let good = document.getElementById('good').checked;
    let cheap = document.getElementById('cheap').checked;
    let fast = document.getElementById('fast').checked;
    let result;
    switch (a) {
        case "good":
            if (good===false){
                if(cheap===false) 
                    if(fast===false)
                        result = "Click vào những mục bên trái để xem kết quả";
                    else result = "Giao hàng nhanh chóng và hiệu quả";
                else result = "Giá thành siêu rẻ";
            }
            else{
                if(cheap===false) 
                    if(fast===false)
                        result = "Chất lượng khỏi phải bàn. Cực tốt :)";
                    else result = "Muốn tốt và nhanh thì giá đắt";
                else 
                    if(fast===false)
                        result = "Muốn tốt và rẻ thì giao hàng chậm hơn";
                    else {
                        document.getElementById('fast').checked = false;
                        result = "Muốn tốt và rẻ thì giao hàng chậm hơn";
                    }
            }
            break;
        case "cheap":
            if (cheap===false){
                    if(good===false) 
                        if(fast===false)
                            result = "Click vào những mục bên trái để xem kết quả";
                        else result = "Giao hàng nhanh chóng và hiệu quả";
                    else result = "Chất lượng khỏi phải bàn. Cực tốt :) ";
            }
            else{
                if(good===false) 
                    if(fast===false)
                        result = "Giá thành siêu rẻ";
                    else result = "Nhanh và rẻ thì chất lượng kém";
                else 
                    if(fast===false)
                        result = "Muốn tốt và rẻ thì giao hàng chậm hơn";
                    else {
                        document.getElementById('good').checked = false;
                        result = "Nhanh và rẻ thì chất lượng kém";
                    }
                break;
            }
        case "fast":
            if (fast===false){
                if(good===false) 
                    if(cheap===false)
                        result = "Click vào những mục bên trái để xem kết quả";
                    else result = "Giá thành siêu rẻ";
                else result = "Chất lượng khỏi phải bàn. Cực tốt :) ";
            }
            else{
                if(good===false) 
                    if(cheap===false)
                        result = "Giao hàng nhanh chóng và hiệu quả";
                    else result = "Nhanh và rẻ thì chất lượng kém";
                else 
                    if(cheap===false)
                        result = "Muốn tốt và nhanh thì giá đắt";
                    else {
                        document.getElementById('cheap').checked = false;
                        result = "Muốn tốt và nhanh thì giá đắt";
                    }
            break;
            }
        default:
            alert("ERR");
            break;
    }
    document.getElementById('result').innerHTML = result;
    
}