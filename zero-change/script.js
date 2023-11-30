// ==================ZERO==============
function changeFontSize(type){
    
    let ids = ["#h"];

    ids.forEach(id =>{
        let el = document.querySelector(id);

        let fontSize = window.getComputedStyle(el , null).getPropertyValue("font-size");

        fontSize = parseFloat(fontSize);

        if(type ==="increase"){
            el.style.fontSize =(fontSize + 5) + "px";
        }else{
            el.style.fontSize =(fontSize - 5) + "px";
        }
        // return

    });
}
let btnClear= document.querySelector('#reset');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click',()=>{
    inputs.forEach(input=>input.value='');
});

const mainTitle = document.querySelector('#h');
let curValue = 0 ;
const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click',() =>{
    curValue++ ;
    mainTitle.textContent =curValue ;
});

btnDecrement.addEventListener('click',() =>{
    curValue-- ;
    mainTitle.textContent =curValue ;
});

btnReset.addEventListener('click',() =>{
    curValue = 0 ;
    mainTitle.textContent =curValue ;
});


