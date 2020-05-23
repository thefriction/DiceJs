var playerOne = Math.floor(((Math.random()*10)%6))+1;
var playerTwo = Math.floor(((Math.random()*10)%6))+1;

if(playerOne > playerTwo)
    document.querySelector("h1").innerHTML = "<i class='fas fa-flag-checkered'></i>Player 1 wins";
else if(playerOne < playerTwo)
    document.querySelector("h1").innerHTML = "</i>Player 2 wins<i class='fas fa-flag-checkered'>";    
else  document.querySelector("h1").innerHTML = "<i class='fas fa-equals'></i>";
console.log(playerOne+" "+playerTwo);
var src1 =  "images/dice"+playerOne+".png" ;
var src2 =  "images/dice"+playerTwo+".png" ;
document.getElementsByClassName('img1')[0].src = src1;
document.getElementsByClassName('img2')[0].src = src2;



