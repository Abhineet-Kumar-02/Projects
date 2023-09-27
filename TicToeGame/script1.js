
let playerx=localStorage.getItem("playerx");
let playero=localStorage.getItem("playero");
let playerxscore=localStorage.getItem('playerxscore');
let playeroscore=localStorage.getItem('playeroscore');

let gamestopped=document.querySelector('.gamestopped');


// console.log(playerx,playero,playerxscore,playeroscore);

const setscoreboard=()=>{
    let playerxscore=localStorage.getItem('playerxscore');
    let playeroscore=localStorage.getItem('playeroscore');

    document.querySelector(".scoreboard").innerHTML=
    `
    <p class="score">${playerx} - ${playerxscore}</p>
    <p class="score">${playero} - ${playeroscore}</p>
    `

}

setscoreboard();

let turn ="playerx";


const setTurn=(turn)=>{
    if(turn=='playerx'){
        document.querySelector('h1').innerHTML=`
        TURN- ${playerx} &nbsp; {X}`
    }else{
        document.querySelector('h1').innerHTML=`
        TURN- ${playero} &nbsp; {O}`
    }
}

setTurn(turn);

const checkwin=()=>{
    let box1=document.getElementById("box1").innerHTML;
    let box2=document.getElementById("box2").innerHTML;
    let box3=document.getElementById("box3").innerHTML;
    let box4=document.getElementById("box4").innerHTML;
    let box5=document.getElementById("box5").innerHTML;
    let box6=document.getElementById("box6").innerHTML;
    let box7=document.getElementById("box7").innerHTML;
    let box8=document.getElementById("box8").innerHTML;
    let box9=document.getElementById("box9").innerHTML;

    if(
        box1=='x' && box2=='x' && box3=='x' ||
        box4=='x' && box5=='x' && box6=='x' ||
        box7=='x' && box8=='x' && box9=='x' ||
        box1=='x' && box4=='x' && box7=='x' ||
        box2=='x' && box5=='x' && box8=='x' ||
        box3=='x' && box6=='x' && box9=='x' ||
        box1=='x' && box5=='x' && box9=='x' ||
        box3=='x' && box5=='x' && box7=='x' 
    ){

        let playerxscore= localStorage.getItem("playerxscore");
        playerxscore=parseInt(playerxscore)+1;
        localStorage.setItem("playerxscore", playerxscore);
        setscoreboard();
        // alert(`${playerx} wins`);
        gamestopped.style.display="flex";
        gamestopped.innerHTML=`
        <h2>${playerx} wins</h2>
        <div>
          <button id="replay" onclick="window.location.href='./gameboard.html'">
            Play Again
          </button>
          <button id="quit" onclick="window.location.href='./index.html'">
            Quit
          </button>
        </div>
        `

    }else if(
        box1=='o' && box2=='o' && box3=='o' ||
        box4=='o' && box5=='o' && box6=='o' ||
        box7=='o' && box8=='o' && box9=='o' ||
        box1=='o' && box4=='o' && box7=='o' ||
        box2=='o' && box5=='o' && box8=='o' ||
        box3=='o' && box6=='o' && box9=='o' ||
        box1=='o' && box5=='o' && box9=='o' ||
        box3=='o' && box5=='o' && box7=='o' 

    ){

        let player0score= localStorage.getItem("playeroscore");
        playeroscore=parseInt(playeroscore)+1;
        localStorage.setItem("playeroscore", playeroscore);
        setscoreboard();
        // alert(`${playero} wins`);
        gamestopped.style.display="flex";
        gamestopped.innerHTML=`
        <h2>${playero} wins</h2>
        <div>
          <button id="replay" onclick="window.location.href='./gameboard.html'">
            Play Again
          </button>
          <button id="quit" onclick="window.location.href='./index.html'">
            Quit
          </button>
        </div>
        `
    }
    else if(
        box1!=="" && box2!=="" && box3!=="" &&
        box4!=="" && box5!=="" && box6!=="" &&
        box7!=="" && box8!=="" && box9!==""
    ){
            // alert('Match draw');
            gamestopped.style.display="flex";
            gamestopped.innerHTML=`
            <h2>Match draw</h2>
            <div>
              <button id="replay" onclick="window.location.href='./gameboard.html'">
                Play Again
              </button>
              <button id="quit" onclick="window.location.href='./index.html'">
                Quit
              </button>
            </div>
            `
    }
}

const showxo=(boxid)=>{
        let box=document.getElementById(boxid);
        if(turn=="playerx" && box.innerHTML==""){
            box.innerHTML="x";
            turn="playero";
            setTurn(turn);
        }else if(turn=="playero" && box.innerHTML==""){
            box.innerHTML="o";
            turn="playerx";
            setTurn(turn);
        }
}
const btnpressed=async(boxid)=>{
   await showxo(boxid);
   checkwin();
}