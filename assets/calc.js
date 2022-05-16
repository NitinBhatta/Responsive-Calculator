const userInput = document.getElementById("user_input");
var expression = "";

function press(arg) {
    expression += arg;
    userInput.value = expression;
    
}


function equal() {
    userInput.value = eval(expression);
    expression = "";
}

function erase() {
    expression = "";
    userInput.value = expression;
}

