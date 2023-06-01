console.log("connected...");

var digitOne = 0;
var digitTwo = 0;
var digtiThree = 0;
var num = 0;
var str="";
var holder=0;
var hold = document.getElementById("disp").innerHTML;

document.getElementById("clear").onclick = function(){myfunction()};
document.getElementById("add").onclick = function(){myfunction0()};
document.getElementById("subtract").onclick = function(){myfunction1()};
document.getElementById("mult").onclick = function(){myfunction2()};
document.getElementById("div").onclick = function(){myfunction3()};
document.getElementById("nine").onclick = function(){myfunction4()};
document.getElementById("eight").onclick = function(){myfunction5()};
document.getElementById("seven").onclick = function(){myfunction6()};
document.getElementById("six").onclick = function(){myfunction7()};
document.getElementById("five").onclick = function(){myfunction8()};
document.getElementById("four").onclick = function(){myfunction9()};
document.getElementById("three").onclick = function(){myfunction10()};
document.getElementById("two").onclick = function(){myfunction11()};
document.getElementById("one").onclick = function(){myfunction12()};
document.getElementById("zero").onclick = function(){myfunction13()};
document.getElementById("decimal").onclick = function(){myfunction14()};
document.getElementById("equal").onclick = function(){myfunction15()};

function myfunction(){
    document.getElementById("disp").innerHTML = "";
    num = 0;
    digitTow = 0;
    digitOne = 0;
    console.log(num);
}
function myfunction15(){
    document.getElementById("disp").innerHTML = "";
    console.log("equal function executed");
    console.log(digitTwo);
    document.getElementById("disp").innerHTML = digitTwo;
    num = 0;
    digitOne =0;
    console.log(hold);
}

function myfunction0(){
    document.getElementById("disp").innerHTML += " + " ;
    num = parseInt(num);
    digitOne = num + digitOne;
    digitTwo = digitOne;
    console.log(digitTwo);
}

function myfunction1(){
    document.getElementById("disp").innerHTML += " - ";
    digitOne = digitOne - parseInt(num);
    digitTwo = digitOne;
    console.log(digitTwo);
}

function myfunction2(){
    document.getElementById("disp").innerHTML += " * ";
}


function myfunction3(){
    document.getElementById("disp").innerHTML += " / ";
    digitOne = num;

}


function myfunction4(){
    document.getElementById("disp").innerHTML += "9";
    num = 9;
    console.log(num);
}





function myfunction5(){
    document.getElementById("disp").innerHTML += "8";
    num += "8";
    console.log(num);
}
function myfunction6(){
    document.getElementById("disp").innerHTML += "7";
    num += "7";
    console.log(num);
}
function myfunction7(){
    document.getElementById("disp").innerHTML += "6";
    num += "6";
    console.log(num);
}
function myfunction8(){
    document.getElementById("disp").innerHTML += "5";
    num += "5";
    console.log(num);
}
function myfunction9(){
    document.getElementById("disp").innerHTML += "4";
    num += "4";
    console.log(num);
}
function myfunction10(){
    document.getElementById("disp").innerHTML += "3";
    num += "3";
    console.log(num);
}
function myfunction11(){
    document.getElementById("disp").innerHTML += "2";
    num += "2";
    console.log(num);
}
function myfunction12(){
    document.getElementById("disp").innerHTML + "1";
    num += "1";
    console.log(num);
}
function myfunction13(){
    document.getElementById("disp").innerHTML += "0";
    num += "0";
    console.log(num);
}
function myfunction14(){
    document.getElementById("disp").innerHTML += ".";
    num += ".";
    console.log(num);
}
