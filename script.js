console.log("connected...");

var digitOne = 0;
var digitTwo = 0;
var holder= 0;
var equation = [];
var num = 0;
var str="";
var operation = {
                '+': function(a,b){return a+b}, 
                '-': function(a,b){return a-b}, 
                '*': function(a,b){return a*b}, 
                '/': function(a,b){return a/b}
            };
var i = 0;
var hold = document.getElementById("disp").innerHTML;
var test = [3, '+', 8, '+', 7, '+', 2, '+', 9, '+', 6];
document.getElementById("clear").onclick = function(){clear()};
document.getElementById("add").onclick = function(){addition()};
document.getElementById("equal").onclick = function(){equal()};
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
document.getElementById("read").onclick = function(){myfunction15()};


function clear(){
    document.getElementById("disp").innerHTML = "";
    num = 0;
    digitTwo= 0;
    digitOne = 0;
    equation = [];
    console.log(equation[0]);
}

var test = [3, '+', 8, '+', 7, '+', 2, '+', 9, '+', 6];

function equal(){
    document.getElementById("disp").innerHTML += "";

    for(var j = 0; j < equation.length; j++){

            if(digitOne = '+'){
            
            }
        }
    } 
    


function addition(){
    document.getElementById("disp").innerHTML += "+";
    num = parseFloat(num);
    equation[i] = num;
    i++;
    num = "+";
    equation[i] = num;
    i++;
    console.log("this is stored in the array position: " + equation[i-1] );
    console.log(num);
}

function subtraction(){
    document.getElementById("disp").innerHTML += "-";
    num = "-";
    equation[i] = num;
    i++;
    console.log("this is stored in the array position: " + equation[i-1] );
    console.log(num);
}

function myfunction2(){
    document.getElementById("disp").innerHTML += "*";
    num = "*";
    equation[i] = num;
    i++;
    console.log("this is stored in the array position: " + equation[i-1] );
    console.log(num);
}


function myfunction3(){
    document.getElementById("disp").innerHTML += "/";
    num = "/";
    equation[i] = num;
    i++;
    console.log("this is stored in the array position: " + equation[i-1] );
    console.log(num);

}


function myfunction4(){
    document.getElementById("disp").innerHTML += "9";
    num += "9";
    console.log(parseFloat(num));
}


function myfunction5(){
    document.getElementById("disp").innerHTML += "8";
    num += "8";
    console.log(parseFloat(num));
}

function myfunction6(){
    document.getElementById("disp").innerHTML += "7";
    num += "7";
    console.log(parseFloat(num));
}

function myfunction7(){
    document.getElementById("disp").innerHTML += "6";
    num += "6";
    console.log(parseFloat(num));
}

function myfunction8(){
    document.getElementById("disp").innerHTML += "5";
    num += "5";
    console.log(parseFloat(num));
}

function myfunction9(){
    document.getElementById("disp").innerHTML += "4";
    num += "4";
    console.log(parseFloat(num));
}

function myfunction10(){
    document.getElementById("disp").innerHTML += "3";
    num += "3";
    console.log(parseFloat(num));
}

function myfunction11(){
    document.getElementById("disp").innerHTML += "2";
    num += "2";
    console.log(parseFloat(num));
}

function myfunction12(){
    document.getElementById("disp").innerHTML += "1";
    num += "1";
    console.log(parseFloat(num));
}

function myfunction13(){
    document.getElementById("disp").innerHTML += "0";
    num += "0";
    console.log(parseFloat(num));
}

function myfunction14(){
    //decimal input
    document.getElementById("disp").innerHTML += ".";
    num += ".";
    console.log(num);
}

function myfunction15(){
    //decimal input
    for(var v= 0; v < equation.length; v++){
        console.log("in posiiton " + v + " is: " + equation[v]);
    }
    console.log(equation[0]);
}