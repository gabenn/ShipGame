let previousPositionC = [];
let positionP = [];
let positionC = [];
let active = "";
let playerPoints = 0;
let computerPoints = 0;
let computerShoot = [];
let cShootNumber = 0;
let computerMove = 0;
// 
if (sizeChoose == 1) {
    for (let i = 0; i < 16; i++) {
        previousPositionC[i] = i + 1;
        positionP[i] = i + 1;
    }
} else if (sizeChoose == 2) {
    for (let i = 0; i < 36; i++) {
        previousPositionC[i] = i + 1;
        positionP[i] = i + 1;
    }
} else if (sizeChoose == 3) {
    for (let i = 0; i < 64; i++) {
        previousPositionC[i] = i + 1;
        positionP[i] = i + 1;
    }
}

// playerShips
let counter = 0;
let playerFields = document.querySelectorAll(".player");
playerFields = [...playerFields];

for (let i = 0; i < positionP.length; i++) {
    playerFields[i].addEventListener("click", function () {

        if (counter < (positionP.length / 4)) {
            if (playerFields[i].className != "playerShip") {
                counter++;
            }
            playerFields[i].className = "playerShip";
            console.log(counter);

        } else {
            alert("Już stworzyłeś wszystkie statki.\nYou made all the ships.");
        }
    });
}

function randomC() { //creating computer Ships
    for (let i = 0; i < (positionP.length / 4); i++) {
        let randomIndex = Math.floor(Math.random() * previousPositionC.length);
        let resultC = previousPositionC[randomIndex];
        if (!positionC.includes(resultC)) {
            positionC.push(resultC);
        } else {
            i--;
        }
    }
    for (let j = 0; j < (positionP.length / 4); j++) {
        document.getElementById('c' + positionC[j]).className = "computerShip"; //create ship
    }
}

function game(number) {
    if (counter < (positionP.length/4)) {
        alert("Nie stworzyłeś jeszcze wszystkich statków.\nYou haven't made all the ships.")
        return;
    }
    active = document.getElementById("c" + number);
    active.setAttribute('onclick', 'console.log("already shot")');
    active.style.background = "cyan";
    if (active.className == "computerShip") {
        active.className = "destroyedComputerShip";
        active.style.background = "black";
        playerPoints += 1;
    }
    //ruch komputera
    else {
        computerMove = Math.floor(Math.random() * positionP.length); //shoot
        while (computerShoot.includes("p" + (computerMove + 1))) {
            computerMove = Math.floor(Math.random() * positionP.length); //second shoot if already shot
        }
        computerShoot[cShootNumber] = "p" + (computerMove + 1);
        cShootNumber += 1;
        console.log(document.getElementById("p" + (computerMove + 1)))
        while (document.getElementById("p" + (computerMove + 1)).className == "playerShip") {
            document.getElementById("p" + (computerMove + 1)).className = "destroyedPlayerShip";
            computerMove = Math.floor(Math.random() * positionP.length);
            while (computerShoot.includes("p" + (computerMove + 1))) {
                computerMove = Math.floor(Math.random() * positionP.length); //second shoot if already shot
            }
            computerShoot[cShootNumber] = "p" + (computerMove + 1);
            console.log(document.getElementById("p" + (computerMove + 1)))
            cShootNumber += 1;
            computerPoints += 1;
        }
        document.getElementById("p" + (computerMove + 1)).style.background = "cyan";
    }
    if (playerPoints == (positionP.length / 4)) {
        alert("Wygrałeś!\nYou won!")
        location.reload();
    }
    if (computerPoints == (positionP.length / 4)) {
        alert("Przegrałeś!\nYou lost!")
        location.reload();
    }
}
randomC();