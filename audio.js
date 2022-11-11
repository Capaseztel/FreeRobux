function click() {
    document.getElementById("music").play();
}

document.getElementById("but").addEventListener("click", click);

document.getElementById("music").volume = 1;