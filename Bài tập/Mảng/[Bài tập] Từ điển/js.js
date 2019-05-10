function ready(){
    let arrVietnam = ["đến","chào buổi sáng","chào buổi tối","tạm biệt","con chó","quả bóng"];
    let arrAnh = ["come","good morning","good evening","good bye","dog","ball"];
    document.getElementById("translate").onclick = function(){
        let fromHtml = document.getElementById("from");
        let toHtml = document.getElementById("to");
        let isVietnamToAnh = (fromHtml.value === "vietnam" && toHtml.value === "anh") ? true : false;
        let isAnhToVietnam = (fromHtml.value === "anh" && toHtml.value === "vietnam") ? true : false;
        let isVietnamToVietnam = (fromHtml.value === "vietnam" && toHtml.value === "vietnam") ? true : false;
        let isAnhToAnh = (fromHtml.value === "anh" && toHtml.value === "anh") ? true : false;
        if (isVietnamToAnh){
            let fromValue = document.getElementById("input").value;
            let toValue = document.getElementById("output");
            for (let i = 0; i < arrVietnam.length; i++) {
                if (fromValue === arrVietnam[i]){
                    toValue.innerHTML = arrAnh[i];
                }  
            }
        }
        
        if (isAnhToVietnam){
            let fromValue = document.getElementById("input").value;
            let toValue = document.getElementById("output");
            for (let i = 0; i < arrAnh.length; i++) {
                if (fromValue === arrAnh[i]){
                    toValue.innerHTML = arrVietnam[i];
                }  
            }
        }
        if (isVietnamToVietnam){
            let fromValue = document.getElementById("input").value;
            let toValue = document.getElementById("output");
            for (let i = 0; i < arrVietnam.length; i++) {
                if (fromValue === arrVietnam[i]){
                    toValue.innerHTML = arrVietnam[i];
                }  
            }
        }
        if (isAnhToAnh){
            let fromValue = document.getElementById("input").value;
            let toValue = document.getElementById("output");
            for (let i = 0; i < arrAnh.length; i++) {
                if (fromValue === arrAnh[i]){
                    toValue.innerHTML = arrAnh[i];
                }  
            }
        }

    }
}