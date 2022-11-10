var countdown = document.getElementById("time");

time = 10;

function countDown() {
    if (time > 0) {
        time--;
        countdown.innerHTML = "Giving " + document.getElementById("user").value + " free robux.  Wait " + time + "...";
    } else {
        countdown.innerHTML = "Here is your free robux!";
    }
    setTimeout(countDown, 1095);
}

function click() {
    countDown();
}

document.getElementById("but").addEventListener("click", click);