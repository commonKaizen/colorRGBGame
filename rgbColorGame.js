var vierkanten = document.querySelectorAll(".vierkant");
var kleurDisplay = document.querySelector("#spelkleur");
var boodschap = document.querySelector("#feedback");
var aantalVierkanten = 6;
var kleuren = [];
var winKleur = "";
var opnieuw = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var niveau = document.querySelector("#lvlkeuze");
var makkieKnop = document.querySelector(".makkie");
var moeilijkKnop = document.querySelector(".moeilijk");

/* function speelSpel() {
    inkleuring(aantalVierkanten)
    for (var i = 0; i < aantalVierkanten; i++) {
        vierkanten[i].style.backgroundColor = kleuren[i];
        vierkanten[i].addEventListener("click", function () {
            if (this.style.backgroundColor === kleurWin) {
                boodschap.textContent = "Gewonnen!";
                opnieuw.textContent = "Nieuw spel?";
                for (var i = 0; i < aantalVierkanten; i++) {
                    vierkanten[i].style.backgroundColor = kleurWin;
                }
            } else {
                boodschap.textContent = "Probeer opnieuw!";
                opnieuw.textContent = "Nieuwe kleuren?";
                this.style.backgroundColor = "#232323";

            }
        })
    }
    kleurWin = winSpel();
    kleurDisplay.textContent = kleurWin;
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

function winSpel() {
    return kleuren[Math.floor(Math.random() * aantalVierkanten)];
}

speelSpel();
 */


function speelSpel() {
    niveauBepaling()
    basiswaardenterugzetten();
    bouwKleurarray(aantalVierkanten);
    inkleuringBord();
    winKleur = kiesWinKleur();
    kleurDisplay.textContent = winKleur;

}

function niveauBepaling() {
    aantalVierkanten = document.querySelector(".actief").textContent === "Moeilijk" ? 6 : 3;
}

function basiswaardenterugzetten() {
    kleuren = [];
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "Nieuw spel?";
    boodschap.textContent = "";
}

function bouwKleurarray(x) {
    for (var i = 0; i < x; i++) {
        var kleur = "";
        var rood = Math.floor(Math.random() * 256);
        var groen = Math.floor(Math.random() * 256);
        var blauw = Math.floor(Math.random() * 256);
        kleur = "rgb(" + rood + ", " + groen + ", " + blauw + ")";
        kleuren.push(kleur);
    }
}

function inkleuringBord() {
    for (var i = 0; i < vierkanten.length; i++) {
        vierkanten[i].style.backgroundColor = kleuren[i];
        vierkanten[i].addEventListener("click", winOrLose);
        if (aantalVierkanten - 1 < i) {
            vierkanten[i].style = "none";
        }
    }
}

function winOrLose() {
    this.style.backgroundColor === winKleur ? gameWin(this) : gamePlay(this);
}

function gameWin(x) {
    document.querySelector("h1").style.backgroundColor = x.style.backgroundColor;
    opnieuw.textContent = "Nieuw spel?"
    boodschap.textContent = "Gefeliciteerd!";
    for (var i = 0; i < kleuren.length; i++) {
        vierkanten[i].style.backgroundColor = winKleur
    }

}

function gamePlay(x) {
    x.style.backgroundColor = "#232323";
    opnieuw.textContent = "Nieuwe kleuren?";
    boodschap.textContent = "Probeer opnieuw!";
}

function kiesWinKleur() {
    return kleuren[Math.floor(Math.random() * aantalVierkanten)];
}

function wisselMoeilijkheid() {
    document.querySelector(".actief").classList.remove("actief");
    this.classList.add("actief");
    speelSpel()
}
speelSpel();
opnieuw.addEventListener("click", speelSpel);
makkieKnop.addEventListener("click", wisselMoeilijkheid);
moeilijkKnop.addEventListener("click", wisselMoeilijkheid);