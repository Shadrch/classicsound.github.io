
function display() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let greet = document.getElementById("greet");

    if (hour < 12) {
        greet.innerHTML='GOOD MORNING!';
    } if (hour >= 12 && hour <= 17) {
            greet.innerHTML='GOOD AFTEROON!';
    } else if (hour >= 17 && hour <= 24) {
        greet.innerHTML='GOOD EVENING!';
    }
   
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}setInterval(display, 10);

let stick = document.getElementById('stick');
let faBar = document.getElementById('fa-bar')
let navList = document.getElementById('nav-list');
const nav = document.getElementById('nav');
nav.addEventListener("click",function () {
   if ( navList.style.display="none") {
    navList.style.display="block";
   }
  
});

function change() {
    if (faBar.className == "fa-solid fa-bars") {
        faBar.className = "fa-solid fa-times"
        faBar.style.fontSize="30px"
    } else {
        faBar.className== "fa-solid fa-bars" 
    }
}
