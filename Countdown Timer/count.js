
const enddate = prompt("Enter the Date")
document.getElementById("end-date").innerText=enddate
// To collect all the inputs from html
const inputs = document.querySelectorAll("input")
const less = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(enddate)
    const now = new Date()
    console.log(Math.floor((end-now)/1000/3600/24));
    const diff = (end-now)/1000
    
    if (diff <0)
       return;

    if(diff<=31)
    {
       less[3].style.color="red";
       less[2].style.color="red";
       less[1].style.color="red";
       less[0].style.color="red";
    }
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;
    
    // 
    /* 
    1 day = 24 hours
    1 hours = 60 minute
    1 minute = 60 seconds
    1 hours = 3600 seconds
    */
}
clock();



setInterval(
   ()=>{
    clock()
   }, 1000 
)
