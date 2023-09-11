var string = ""
let buttons = document.querySelectorAll('.btn');
// const button = document.querySelector('.historyButton');
let history = document.getElementById('history');
let para = document.createElement('p');
let todoDiv = document.createElement("div");
let todoItem = document.createElement("li");
// let square = <sup>2</sup>;
// button.addEventListener('click', hist)
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            var text = document.createElement("p");
            text.innerText = string + '=' + eval(string);
            document.getElementById('history').appendChild(text);
            string = eval(string);
            document.querySelector('input').v = string;
            // para.innerText = string;
            // history.appendChild(para);
            // e.preventDefault();
            // console.log(input.value);

            // document.querySelector('.history').innerHTML = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "x<sup>2</sup>") {
            string = eval(string + "*" + string);
            document.querySelector('input').value = string;
            console.log(string);
        }
        else if (e.target.innerHTML == "CE") {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "e") {
            string = "2.7182";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "(") {
            string = string + "(";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == ")") {
            string = string + ")";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        return string;
    })
})
var colour = document.querySelectorAll('input');

function color() {

    document.querySelector('.frame').style.backgroundColor = colour[1].value;
}
function myFunction() {
    var check = document.getElementById("first");
    var text = document.getElementById("history");
    if (check.checked == false) {
        text.style.display = "none";
    } else {
        text.style.display = "flex";
    }
}

function displayColour() {
    var checkBox = document.getElementById("colour1");
    var display = document.getElementById("colour");
    if (checkBox.checked == false) {
        display.style.display = "none";
    } else  {
        display.style.display = "flex";
    }
}

function other() {
    var checkBox = document.getElementById("second");
    // var text = document.getElementById("history");
    if (checkBox.checked == true) {
        document.getElementById('e').innerText = "e";
        document.getElementById('bracket1').innerText = "(";
        document.getElementById('bracket2').innerText = ")";
    } else {
        document.getElementById('e').innerText = "/";
        document.getElementById('bracket1').innerText = "%";
        document.getElementById('bracket2').innerText = "*";
    }
}






