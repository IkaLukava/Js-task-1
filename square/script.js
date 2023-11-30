console.log("random movement of the square");

let square1 = document.querySelector(".square");
let main = document.getElementsByTagName("main")[0];
let arvici = document.querySelector(".atrakeb")



square1.addEventListener("click", function(){


    let randomWidth = `${Math.floor(Math.random() * (arvici.offsetWidth - 100))}px`;
    let randomHeight = `${Math.floor(Math.random() * (arvici.offsetHeight - 100))}px`;
    square1.style.left = `${randomWidth}`;
    square1.style.top = `${randomHeight}`;
})