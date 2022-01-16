function myfunc () {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=documet.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

if ((b1 =='X' || b1 == 'X')&&(b2 =='X' || b2 =='X')&&(b3 == 'X' || b3 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getElementById("b4"). disabled = true;
    document.getElementById("b5").disabled =true;
    document.getElementById("b6"). disabled = true;
    document.getElementById("b7").disabled =true;
    document.getElementById("b8"). disabled = true;
    document.getElementById("b9").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b1 =='X' || b1 == 'X')&&(b4 =='X' || b4 =='X')&&(b7 == 'X' || b7 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER X WON');
}

else if ((b7 =='X' || b7 == 'X')&&(b8 =='X' || b8 =='X')&&(b9 == 'X' || b9 == "X")){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b6").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b3 =='X' || b3 == 'X')&&(b6 =='X' || b6 =='X')&&(b9 == 'X' || b9 == "X")){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b1 =='X' || b1 == 'X')&&(b5 =='X' || b5 =='X')&&(b9 == 'X' || b9 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b3 =='X' || b3 == 'X')&&(b5 =='X' || b5 =='X')&&(b7 == 'X' || b7 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b2 =='X' || b2 == 'X')&&(b5 =='X' || b5 =='X')&&(b8 == 'X' || b8 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b4 =='X' || b4 == 'X')&&(b5 =='X' || b5 =='X')&&(b6 == 'X' || b6 == 'X')){
    document.getElememtById('print').innerHTML = 'PLAYER X WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER X WON');
}
else if ((b1 =='O' || b1 == 'O')&&(b2 =='O' || b2 =='O')&&(b3 == 'O' || b3 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getElementById("b4"). disabled = true;
    document.getElementById("b5").disabled =true;
    document.getElementById("b6"). disabled = true;
    document.getElementById("b7").disabled =true;
    document.getElementById("b8"). disabled = true;
    document.getElementById("b9").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b1 =='O' || b1 == 'O')&&(b4 =='O' || b4 =='O')&&(b7 == 'O' || b7 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER O WON');
}

else if ((b7 =='O' || b7 == 'O')&&(b8 =='O' || b8 =='O')&&(b9 == 'O' || b9 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b6").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b3 =='O' || b3 == 'O')&&(b6 =='O' || b6 =='O')&&(b9 == 'O' || b9 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b5").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b1 =='O' || b1 == 'O')&&(b5 =='O' || b5 =='O')&&(b9 == 'O' || b9 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b3 =='O' || b3 == 'O')&&(b5 =='O' || b5 =='O')&&(b7 == 'O' || b7 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b2 =='O' || b2 == 'O')&&(b5 =='O' || b5 =='O')&&(b8 == 'O' || b8 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b4").disabled =true;
    document.getelementById("b6").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER O WON');
}
else if ((b4 =='O' || b4 == 'O')&&(b5 =='O' || b5 =='O')&&(b6 == 'O' || b6 == 'O')){
    document.getElememtById('print').innerHTML = 'PLAYER O WON';
    document.getelementById("b1").disabled =true;
    document.getelementById("b2").disabled =true;
    document.getelementById("b3").disabled =true;
    document.getelementById("b7").disabled =true;
    document.getelementById("b8").disabled =true;
    document.getelementById("b9").disabled =true;
    window.alert('PLAYER O WON');
}
else if((b1 == 'X' || b1 == 'O')&&(b2 == 'X' || b2 == 'O')&&(b3 == 'X' || b3 == 'O')&&(b4 == 'X' || b4 == 'O')&&(b5 == 'X' || b5 == 'O')&&(b6 == 'X' || b6 == 'O')&&(b7 == 'X' || b7 == 'O')&&(b8 == 'X' || b8 == 'O')&&(b9 == 'X' || b9 == 'O')) {
    document.getelementById('print').innerHTML = "Match Tie";
    window.alert('Match Tie');
}
else {
    if (flag==1) {
        document.getelementById('print').innerHTML ="Player X Turn";
    }
    else{
        document.getelementById('print').innerHTML ="Player O Turn";
    }
}
}
function myfunc_2() {
    location.reload();
    document.getelementById("b1").value ='';
    document.getelementById("b2").value ='';
    document.getelementById("b3").value ='';
    document.getelementById("b4").value ='';
    document.getelementById("b5").value ='';
    document.getelementById("b6").value ='';
    document.getelementById("b7").value ='';
    document.getelementById("b8").value ='';
    document.getelementById("b9").value ='';
}
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getelementById("b1").value = "X";
        document.getelementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b1").value = "O"
        document.getelementById("b1").disabled = true;
        flag = 1;
    }
}
function myfunc_4() {
    if (flag == 1) {
        document.getelementById("b2").value = "X";
        document.getelementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b2").value = "O"
        document.getelementById("b2").disabled = true;
        flag = 1;
    }
}
function myfunc_5() {
    if (flag == 1) {
        document.getelementById("b3").value = "X";
        document.getelementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b3").value = "O"
        document.getelementById("b3").disabled = true;
        flag = 1;
    }
}
function myfunc_6() {
    if (flag == 1) {
        document.getelementById("b4").value = "X";
        document.getelementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b4").value = "O"
        document.getelementById("b4").disabled = true;
        flag = 1;
    }
}
function myfunc_7() {
    if (flag == 1) {
        document.getelementById("b5").value = "X";
        document.getelementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b5").value = "O"
        document.getelementById("b5").disabled = true;
        flag = 1;
    }
}
function myfunc_8() {
    if (flag == 1) {
        document.getelementById("b6").value = "X";
        document.getelementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b6").value = "O"
        document.getelementById("b6").disabled = true;
        flag = 1;
    }
}
function myfunc_9() {
    if (flag == 1) {
        document.getelementById("b7").value = "X";
        document.getelementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b7").value = "O"
        document.getelementById("b7").disabled = true;
        flag = 1;
    }
}
function myfunc_10() {
    if (flag == 1) {
        document.getelementById("b8").value = "X";
        document.getelementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b8").value = "O"
        document.getelementById("b8").disabled = true;
        flag = 1;
    }
}
function myfunc_11() {
    if (flag == 1) {
        document.getelementById("b9").value = "X";
        document.getelementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getelementById("b9").value = "O"
        document.getelementById("b9").disabled = true;
        flag = 1;
    }
}



