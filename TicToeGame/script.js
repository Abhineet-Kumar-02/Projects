localStorage.clear();
const startgame=()=>{
    if(document.getElementById('playerx').value=='' || document.getElementById('playero').value=='') 
    {
        alert('Please enter all the player name');
    }
    else if
    (
        document.getElementById('playerx').value== document.getElementById('playero').value
    ){
        alert('Player name should be different');
    }

    localStorage.setItem('playerx',document.getElementById('playerx').value);

    localStorage.setItem('playero',document.getElementById('playero').value);

    localStorage.setItem('playerxscore',0);
    localStorage.setItem('playeroscore',0);

    window.location.href="./gameBoard.html";
}
