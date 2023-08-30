let string =""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
    
    if (e.target.innerHTML == '=') {
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'AC') {
        string = ""
        document.querySelector('input').value = string;
    }
    else {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    
})
})








// var first
// var second
// function getValue() {
// first = document.querySelectorAll("input")[0].value
// second = document.querySelectorAll("input")[1].value
// console.log(first);
// console.log(second);

// }
// function Add() {
//     let  answer = first+second;
//     document.getElementById("answer").innerHTML = "test";
//     console.log(answer);
// }
// getValue();

// Add();
