//BUTTON1

const button1 = document.getElementById("btn-background");

const changeBackground = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    document.body.style.background = `#${hexVal}`;
}
button1.addEventListener("click", changeBackground);

//BUTTON2
const button2 = document.getElementById("button");

const changebuttoncolor = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);

    button2.style.backgroundColor = `#${hexVal}`;
}
button2.addEventListener("click",changebuttoncolor );

//BUTTON3
const button3 = document.getElementById("changeeverything");

const changeeverythingcolor = () => {
    const hexVal =Math.floor(Math.random() * 0xffffff).toString(16);
    const anotherColor = Math.floor(Math.random() * 0xffffff).toString(16);
   
    document.body.style.background = `#${hexVal}`;
    button3.style.backgroundColor= `#${anotherColor}`;
}
button3.addEventListener("click",changeeverythingcolor);










