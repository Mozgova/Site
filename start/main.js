var userChoice;
userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (0 < computerChoice <= 0.33) 
{ console.log("rock");} 
else if (0.34 <= computerChoice <= 0.66)
{console.log("paper");} 
else (0.37 <= computerChoice <= 1)
{ console.log("scissors");}
console.log(computerChoice)