alert("Jeżeli korzystasz z przęglądarki edge 2.0 zmień przeglądarke dla prawidłowego działania strony.")

let previousPositionC=[];
let positionP=[];
let positionC =[];
if(sizeChoose==1)
{
    for(let i=0;i<16;i++)
    {
        previousPositionC[i]=i+1;
        positionP[i]=i+1;
    }
}
else if(sizeChoose==2)
{
    for(let i=0;i<36;i++)
    {
        previousPositionC[i]=i+1;
        positionP[i]=i+1;
    }
}
else if(sizeChoose==3)
{
    for(let i=0;i<64;i++)
    {
        previousPositionC[i]=i+1;
        positionP[i]=i+1;
    }
}

function randomC()
{ //tworzenie statków komputera
    for(let i =0;i<(positionP.length/4);i++ )
    {
    let randomIndex=Math.floor(Math.random() * previousPositionC.length);//losowanie
    let resultC= previousPositionC[randomIndex]; //wpisywanie do tablicy
        if(!positionC.includes(resultC)) //sprawdzanie czy nie powtarza się
        {
        positionC.push(resultC); // wrzucanie do tablicy
        }
        else
        {
        i--;
        }
    }
    for(let j=0;j<(positionP.length/4);j++)
    {
    document.getElementById('c'+positionC[j]).className = "computerShip"; //tworzenie statków
    }
}
let active ="";
let x=0;//punkty "zwycięstwa" gracza
let j=0;//punkty "zwycięstwa" komputera
let computerShoot =[]; //strzały komputera
let cShootNumber =0; // indeks do strzałów komputera
let computerMove =0; // ruch komputera
function game(numer)
{ 
    //ruch gracza
    active= document.getElementById("c"+numer);
    //console.log(aktywna);
    active.value="x";
    active.setAttribute('onclick','console.log("already shot")');
    if(active.className=="computerShip") // czy gracz trafił w statek komputera
    {
        //console.log("gracz trafił")
        active.className="destroyedComputerShip";
        x++;
    }
    //ruch komputera
    else
    { 
    computerMove = Math.floor(Math.random()*positionP.length);
    while (computerShoot.includes("p"+(computerMove+1)))// czy strzał sie powtórzył
    {
        computerMove = Math.floor(Math.random()*positionP.length);
    }
        computerShoot[cShootNumber] = "p"+(computerMove+1);// zapisywanie strzału komputera
        cShootNumber+=1;
        document.getElementById("p"+(computerMove+1)).value = "x";
        while(document.getElementById("p"+(computerMove+1)).className == "playerShip")
        {
            // console.log("pierwsze z rzedu trafienie komputera")
            document.getElementById("p"+(computerMove+1)).className = "destroyedPlayerShip"
            computerShoot[cShootNumber] = "p"+(computerMove+1);// zapisywanie strzału komputera
            cShootNumber+=1;
            computerMove = Math.floor(Math.random()*positionP.length);
            document.getElementById("p"+(computerMove+1)).value = 'x';
            j=j+1;
            console.log(j);
            // if(document.getElementById("p"+(computerMove+1)).className == "playerShip")
            // {
            //     console.log("drugie z rzedu trafienie komputera")
            //     document.getElementById("p"+(computerMove+1)).className = "destroyedPlayerShip"
            //     computerShoot[cShootNumber] = "p"+(computerMove+1);// zapisywanie strzału komputera
            //     cShootNumber+=1;
            //     computerMove = Math.floor(Math.random()*positionP.length);
            //     j=j+1;
            //     document.getElementById("p"+(computerMove+1)).value = 'x';
            //     if(document.getElementById("p"+(computerMove+1)).className == "playerShip")
            //     {
            //         console.log("trzeciev trafienie komputera")
            //         document.getElementById("p"+(computerMove+1)).className = "destroyedPlayerShip"
            //         computerShoot[cShootNumber] = "p"+(computerMove+1);// zapisywanie strzału komputera
            //         cShootNumber+=1;
            //         computerMove = Math.floor(Math.random()*positionP.length);
            //         j=j+1;
            //         document.getElementById("p"+(computerMove+1)).value = 'x';
            //         if(document.getElementById("p"+(computerMove+1)).className == "playerShip")
            //         {
            //             document.getElementById("p"+(computerMove+1)).className = "destroyedPlayerShip"
            //             console.log("czwarte z rzedu trafienie komputera")
            //             j=j+1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            //         }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            //     }
            // }
        }
    }
    if (x==(positionP.length/4))
    {
        alert("gracz wygrał")
        location.reload();
    }
    if (j==(positionP.length/4))
    {
        alert("komputer wygrał")
        location.reload();
    }
}
randomC();
//PRZEROBIĆ STRZAŁY KOMPUTRA NA NIESKOŃCZONĄ ILOŚĆ STRZAŁÓW