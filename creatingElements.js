const playerZone = document.getElementById("playerZone");
const computerZone = document.getElementById("computerZone");
const gameZone = document.getElementById("gameZone");

const playerSpan = document.getElementById("playerSpan");
const computerSpan = document.getElementById("computerSpan");

sizeChoose = prompt("Wybierz ilość pól. Select the number of fields  \n1 = 4X4, 2 = 6X6, 3 = 8X8");

while (parseInt(sizeChoose) < 1 || parseInt(sizeChoose) > 3 || sizeChoose == null || sizeChoose == "") {
    sizeChoose = prompt("Podałeś/łaś złą wartość. Enter a valid value please. \n 1 = 4X4, 2 = 6X6, 3 = 8X8");
}
sizeChoose = parseInt(sizeChoose);

switch (sizeChoose) {
    case 1: {
        for (let i = 1; i <= 16; i++) {
            let input = document.createElement("input");
            input.type = "button";
            input.id = "p" + i;
            input.className = "player";
            playerZone.appendChild(input);
        }
        for (let i = 1; i <= 16; i++) {
            let input = document.createElement("input");
            input.type = "button";
            input.id = "c" + i;
            input.className = "computer";
            input.setAttribute('onclick', 'game(' + i + ")");
            computerZone.appendChild(input);
        }
        playerZone.style.width = 150;
        computerZone.style.width = 150;
    }
    break;
case 2: {
    for (let i = 1; i <= 36; i++) {
        let input = document.createElement("input");
        input.type = "button";
        input.id = "p" + i;
        input.className = "player";
        playerZone.appendChild(input);
    }
    for (let i = 1; i <= 36; i++) {
        let input = document.createElement("input");
        input.type = "button";
        input.id = "c" + i;
        input.className = "computer";
        input.setAttribute('onclick', 'game(' + i + ")");
        computerZone.appendChild(input);
    }
    playerZone.style.width = 210;
    computerZone.style.width = 210;
}
break;
case 3: {
    for (let i = 1; i <= 64; i++) {
        let input = document.createElement("input");
        input.type = "button";
        input.id = "p" + i;
        input.className = "player";
        playerZone.appendChild(input);
    }
    for (let i = 1; i <= 64; i++) {
        let input = document.createElement("input");
        input.type = "button";
        input.id = "c" + i;
        input.className = "computer";
        input.setAttribute('onclick', 'game(' + i + ")");
        computerZone.appendChild(input);
    }
    playerZone.style.width = 270;
    computerZone.style.width = 270;
}
}