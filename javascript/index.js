function myFunction() {

    var number1 = parseInt(document.getElementById("num1").value),
     number2 = parseInt(document.getElementById("num2").value),
     ch = parseInt(document.getElementById("ch").value),
     add = number1 + number2,
     sub = number1 - number2,
     mul = number1 * number2,
     div = number1 / number2,
    rem = number1 % number2,
    result=document.getElementById("result");

    if (ch == 1) {
         result.innerHTML = "The answer is:" +"  "+ add;
    } else if (ch == 2) {
        result.innerHTML = "The answer is:" +"  "+ sub;
    } else if (ch == 3) {
        result.innerHTML = "The answer is:" +"  "+ mul;
    } else if (ch == 4) {
        result.innerHTML = "The answer is:" +"  "+ div;
    } else if (ch == 5) {
        result.innerHTML = "The answer is:" +"  "+ rem;
    } else {
        result.innerHTML = "please enter correct number";
    }
}	
