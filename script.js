
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

function show() {
    // let play = document.getElementById("nav-list").style.display ="block";
}