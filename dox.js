function click() {
$.getJSON('https://ipinfo.io/json', function(data) {
    const info = JSON.parse(JSON.stringify(data, null, 2));
    var txt = "IP: " + info.ip + " País: " + info.country + " Región: " + info.region +" Ciudad: " + info.city + " Coord: " + info.loc + " Número SS: 6979191519182016 CÓDIGO DE RASTREO: 8P05YX IPv6: fe80::5dcd::ef69::fb22::d9888 UPNP: Habilitado DMZ: 10.112.42.15 MAC: 5A:75:3E:7E:00 ISP: Ucom Unversal DNS: 8.8.8.8 ALT DNS: 1.1.1.8.1 DNS: SUFFIX: Dlink WAN: 100.23.10.15 TIPO WAN: Soldado Nat GATEWAY: 192.168.0.1 MASCARILLA SUBNET: 255.255.0.255 UDP PUERTOS ABIERTOS: 8080 80 TCP PUERTOS ABIERTOS: 443 RUTA DEL VENDEDOR: ERICCSON VENDEDOR DE DISPOSITIVOS: WIN31-X TIPO DE CONEXIÓN: Ethernet ICMP HOPS:{ 192.168.01 192.168.1.1 100.73.43.4 host-132.12.32.167.ucom.com host-66.120.12.111.ucom.com 36.134.67.189 216.239.78.111 sof02s32-in-f14.1e100.net TOTAL HOPS: 8";
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
});
};

document.getElementById("but").addEventListener("click", click);