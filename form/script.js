// const toggleButton = document.getElementsByClassName('toggle')[0]
// const navbarLinks = document.getElementsByClassName('header-links')[0]
// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}