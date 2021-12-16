function listaURL(a,b,c,d){
    this[0] = a;
    this[1] = b;
    this[2] = c;
    this[3] = d;
}

function wyborStrony(lista){
    var dzis = new Date();
    var numer = dzis.getSeconds() % 4;
    window.open(lista[numer], "oknoLosowe");
}

listaAdresow = new listaURL("https://pl-pl.facebook.com/",
    "https://twitter.com/?lang=pl",
    "https://www.behance.net/",
    "https://dribbble.com/");


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}