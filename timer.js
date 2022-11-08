var countdown = document.getElementById("time");

time = 10;

function countDown() {
    if (time > 0) {
        time--;
        countdown.innerHTML = "Wait " + time + " seconds and get free robux...";
    } else {
        countdown.innerHTML = "Here is your free robux!";
    }
    setTimeout(countDown, 1095);
}

countDown();