// Change colors funktion

var index = 0; 

function changeColors(){
    var colors = ["#BCC3FF", "#4557FF", "#E7FFCF", "#79FF8D", "#FFABF4"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
if(index > colors.length - 1)
    index = 0;
}



// burgermenu

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-wrapper");

burger.addEventListener("click", toggleHidden);

function toggleHidden() {
    menu.classList.toggle("hidden");
}

