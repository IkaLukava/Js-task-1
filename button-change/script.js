//BUTTON1

let button1 = document.getElementById("btn-background");

let changeBackground = () => {
    let hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    document.body.style.background = `#${hexVal}`;
}
button1.addEventListener("click", changeBackground);

//BUTTON2

let button2 = document.getElementById("button");

let changebuttoncolor = () => {
    let hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    button2.style.backgroundColor = `#${hexVal}`;
}
button2.addEventListener("click",changebuttoncolor );

//BUTTON3

let button3 = document.getElementById("changeeverything");

let changeeverythingcolor = () => {
    let hexVal =Math.floor(Math.random() * 0xffffff).toString(16);
    let anotherColor = Math.floor(Math.random() * 0xffffff).toString(16);
   
    document.body.style.background = `#${hexVal}`;
    button3.style.backgroundColor= `#${anotherColor}`;
}
button3.addEventListener("click",changeeverythingcolor);










