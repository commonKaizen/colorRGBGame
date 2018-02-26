var vierkanten = document.querySelectorAll(".vierkant");
var aantalVierkanten = 6;
var kleuren = [];

function speelSpel() {
    inkleuring(aantalVierkanten)
    for (var i = 0; i < aantalVierkanten; i++) {
        vierkanten[i].style.backgroundColor = kleuren[i];
    }
}

function inkleuring(x) {
    for (var i = 0; i < x; i++) {
        var kleur = "";
        var rood = Math.floor(Math.random() * 256);
        var groen = Math.floor(Math.random() * 256);
        var blauw = Math.floor(Math.random() * 256);
        kleur = "rgb(" + rood + ", " + groen + ", " + blauw + ")";
        kleuren.push(kleur);
    }
}

speelSpel();