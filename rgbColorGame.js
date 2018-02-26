var vierkanten = document.querySelectorAll(".vierkant");
var kleurDisplay = document.querySelector("#spelkleur");
var boodschap = document.querySelector("#feedback");
var aantalVierkanten = 6;
var kleuren = [];
var kleurWin = "";

function speelSpel() {
    inkleuring(aantalVierkanten)
    for (var i = 0; i < aantalVierkanten; i++) {
        vierkanten[i].style.backgroundColor = kleuren[i];
        vierkanten[i].addEventListener("click", function () {
            if (this.style.backgroundColor === kleurWin) {
                boodschap.textContent = "Gewonnen!";
                for (var i = 0; i < aantalVierkanten; i++) {
                    vierkanten[i].style.backgroundColor = kleurWin;
                }
            } else {
                boodschap.textContent = "Probeer opnieuw!";
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