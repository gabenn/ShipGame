//modyfikator gry
const playerZone=document.getElementById("playerZone");
const computerZone= document.getElementById("computerZone");
const gameZone=document.getElementById("gameZone");

const playerSpan=document.getElementById("playerSpan");
const computerSpan=document.getElementById("computerSpan");    

sizeChoose= prompt("Wybierz ilość pól \n 1 = 4X4, 2 = 6X6, 3 = 8X8");
//console.log(sizeChoose)
// upewnienie się że gracz wybierze dobrze

playerSpan.innerHTML="STREFA GRACZA"
computerSpan.innerHTML="STREFA KOMPUTERA"

while(parseInt(sizeChoose)<1 || parseInt(sizeChoose)>3 || sizeChoose==null || sizeChoose=="")
{
    sizeChoose= prompt("Podałeś / łaś złą wartość \n 1 = 4X4, 2 = 6X6, 3 = 8X8");
}
sizeChoose = parseInt(sizeChoose);
//switch tworzący odpowiednią ilość statków
switch(sizeChoose)
{
    case 1:
    {
        for(let i=1;i<=16;i++)
        {
            let input = document.createElement("input");
            input.type="button";
            // input.value=i;
            input.className="player";
            input.id="p"+i;
            playerZone.appendChild(input);
        }
        for(let i=1;i<=16;i++)
        {
            let input = document.createElement("input");
            input.type="button";
            // input.value=i;
            input.className="computer";
            input.id="c"+i;
            input.setAttribute('onclick','game('+i+")");
            computerZone.appendChild(input);
            }
        playerZone.style.width=150;
        playerZone.style.height=150;
        computerZone.style.width=150;
        computerZone.style.height=150;
        gameZone.style.width=200;
        gameZone.style.height=300;
    }
    break;
    case 2:
    {
        for(let i=1;i<=36;i++)
        {
        let input = document.createElement("input");
        input.type="button";
        // input.value=i;
        input.className="player";
        input.id="p"+i;
        playerZone.appendChild(input);
        }
        for(let i=1;i<=36;i++)
        {
            let input = document.createElement("input");
            input.type="button";
            // input.value=i;
            input.className="computer";
            input.id="c"+i;
            input.setAttribute('onclick','game('+i+")");
            computerZone.appendChild(input);
        }
        playerZone.style.width=210;
        playerZone.style.height=210;
        computerZone.style.width=210;
        computerZone.style.height=210;
        gameZone.style.width=220;
        gameZone.style.height=430;
    }
    break;
    case 3:
    {                    
        for(let i=1;i<=64;i++)
        {
            let input = document.createElement("input");
            input.type="button";
            // input.value=i;
            input.className="player";
            input.id="p"+i;
            playerZone.appendChild(input);
        }
        for(let i=1;i<=64;i++)
        {
            let input = document.createElement("input");
            input.type="button";
            // input.value=i;
            input.className="computer";
            input.id="c"+i;
            input.setAttribute('onclick','game('+i+")");
            computerZone.appendChild(input);
        }
        playerZone.style.width=270;
        playerZone.style.height=270;
        computerZone.style.width=270;
        computerZone.style.height=270;
        gameZone.style.width=280;
        gameZone.style.height=550;
    }
}
