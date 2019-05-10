var a=new Array(),n="";
a[1]='T';a[2]='Ô';a[3]='I';a[4]=' ';a[5]='L';a[6]='À';a[7]=' ';a[8]='M';a[9]='Ộ';a[10]='T';a[11]=' ';a[12]='Đ';a[13]='Ứ';a[14]='A';a[15]=' ';a[16]='N';a[17]='G';a[18]='Ố';a[19]='C';a[20]='!';a[21]='!';a[22]='!';
function typeTextarea(){
    let text = document.from.txt.value;
    let j = text.length;
    if(j > 0)
    {
        for(let i=1; i<=j; i++)
        {
            n = n + a[i];
            if(i == 22)
            {
                document.from.txt.value = "";
                n = "";
            }
        }
    }
    document.from.txt.value = n;
    n="";
    setTimeout("typeTextarea()", 1);
    //return false;
}