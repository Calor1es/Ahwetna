//adding functiuon to a button
/*document.getElementById("myButton").onclick = function () {
    //alert('hello!');
    let doFunction = window.prompt("Write Something");
    doFunction()
    window.location.replace("../html/signupdn.html")
};
*/
const signupBtn = document.querySelector('.myButton');
const okBtn = document.querySelector('.ok-btn');
const popupBox = document.querySelector('.popup-overlay');

signupBtn.addEventListener('click',() => {
    window.open("../html/index.html"); 
})

okBtn.addEventListener('click',() => {
    popupBox.classList.remove('active')
})
