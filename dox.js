$.getJSON('https://ipinfo.io/json', function(data) {
    const info = JSON.parse(JSON.stringify(data, null, 2));
    var txt = "IP: " + info.ip + "<br>País: " + info.country + "<br>Región: " + info.region +"<br>Ciudad: " + info.city + "<br>Coord: " + info.loc;
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("dox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

sleep(11000).then(() => {
typeWriter();
});