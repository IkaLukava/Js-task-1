console.log("random movement of the square");

const square = document.querySelector(".square");
const container = document.querySelector(".container");

square.addEventListener("click", function(){
    const randomWidth = `${Math.floor(Math.random() * (container.offsetWidth - 10))}px`;
    const randomHeight = `${Math.floor(Math.random() * (container.offsetHeight - 10))}px`;

    square.style.left = `${randomWidth}`;
    square.style.top = `${randomHeight}`;
    
    const currentPosition = `${randomWidth},${randomHeight}`;
    localStorage.setItem("squarePosition", currentPosition);
});




