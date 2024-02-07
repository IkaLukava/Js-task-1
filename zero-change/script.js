// // ==================ZERO==============
// function changeFontSize(type){
    
//     const ids = ["#h"];

//     ids.forEach(id =>{
//         const el = document.querySelector(id);

//         const fontSize = window.getComputedStyle(el , null).getPropertyValue("font-size");

//         fontSize = parseFloat(fontSize);

//         if(type ==="increase"){
//             el.style.fontSize =(fontSize + 5) + "px";
//         }else{
//             el.style.fontSize =(fontSize - 5) + "px";
//         }
//         return

//     });
// }



const btnClear= document.querySelector('#reset');
const inputs = document.querySelectorAll('input');

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});

let mainTitle = document.querySelector('#h');
let curValue = 0 ;
let btnDecrement = document.querySelector('#decrement');
let btnReset = document.querySelector('#reset');
let btnIncrement = document.querySelector('#increment');

btnDecrement.addEventListener('click',() =>{
    curValue++ ;
    mainTitle.textContent =curValue ;
});

btnIncrement.addEventListener('click',() =>{
    curValue-- ;
    mainTitle.textContent =curValue ;
});

btnReset.addEventListener('click',() =>{
    curValue = 0 ;
    mainTitle.textContent =curValue ;
});


$(document).ready(function () { 
    $("#like").on("click", function () { 
        $("#icon").toggleClass("red"); 
        $("#icon").toggleClass("fa-solid"); 
    }); 
}); 