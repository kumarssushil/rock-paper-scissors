let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score")
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerchoice(){
    const choices = ['r','p','s'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices[randomnumber];
}
function converttoword(letter){
    if(letter === "r")return "Rock";
    if(letter === "p")return "Paper";
    return "scissors";
}
function win(userchoice, computerchoice){
    userscore++;
    userscore_span.innerHTML= userscore;
    computerscore_span.innerHTML = computerscore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "computer".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    result_p.innerHTML = `${converttoword(userchoice)}${smalluserword}  beats  ${converttoword(computerchoice)}${smallcompword} . you win `;
    userchoice_div.classList.add('green-glow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('green-glow')},1000)
}
function lose(userchoice,computerchoice){
    computerscore++;
    userscore_span.innerHTML= userscore;
    computerscore_span.innerHTML = computerscore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "computer".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    result_p.innerHTML = `${converttoword(userchoice)}${smalluserword}  loses  ${converttoword(computerchoice)}${smallcompword} . you Lost.. `;
    userchoice_div.classList.add('red-glow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('red-glow')},1000)
    
}
function draw(userchoice,computerchoice){
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "computer".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    userchoice_div.classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('grey-glow')},1000)
    result_p.innerHTML = `${converttoword(userchoice)}${smalluserword}  equals  ${converttoword(computerchoice)}${smallcompword} . It's a draw `;
}
function game(userchoice){
    const computerchoice = getcomputerchoice();
    switch(userchoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice,computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerchoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();
