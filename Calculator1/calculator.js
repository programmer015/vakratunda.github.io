var string =""
let buttons = document.querySelectorAll('.btn');
// const button = document.querySelector('.historyButton');
let history = document.getElementById('history');
let para = document.createElement('p');
let todoDiv = document.createElement("div");
let todoItem = document.createElement("li");
// let square = <sup>2</sup>;
// button.addEventListener('click', hist)
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
    
    if (e.target.innerHTML == '=') {
        var text = document.createElement("p");
        text.innerText=string+'='+eval(string);
        document.getElementById('history').appendChild(text);
        string = eval(string);
        document.querySelector('input').value = string;
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
        string = eval(string+"*"+string);
        document.querySelector('input').value = string;
        console.log(string);
    }
    else if (e.target.innerHTML == "CE") {
        string = string.substring(0, string.length-1);
        document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == "e") {
        string = "2.7182";
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

// s

function myFunction() {
    var checkBox = document.getElementById("first");
    var text = document.getElementById("history");
    if (checkBox.checked == false){
      text.style.display = "none";
    } else {
       text.style.display = "block";
    }
  }

// function other () {
//     document.getElementById('e').innerText="e";
// }

// function hist(event)
// {
//     event.preventDefault();
//     // console.log(input.value);
//     const todoDiv = document.createElement("div")
//     todoDiv.classList.add("hisdiv")

//     const todoItem = document.createElement("li")
//     todoItem.classList.add("hisList")
//     todoItem.innerText= string;
//     todoDiv.appendChild(todoItem)

//     // const deleteButton = document.createElement("button")
//     // deleteButton.classList.add("delete-btn")
//     // deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
//     // todoDiv.appendChild(deleteButton)

//     // const completeButton = document.createElement("button")
//     // completeButton.classList.add("complete-btn")
//     // completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`
//     // todoDiv.appendChild(completeButton)

//     // todoList.appendChild(todoDiv)
//     // input.value = "";

// }







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
