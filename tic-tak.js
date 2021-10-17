const playerOneName = document.getElementById("p1_name");
const playerTwoName = document.getElementById("p2_name");
const add_user = document.getElementById("add_user");
const user_details = document.getElementById("enter_details_panel");
const game_box = document.getElementsByClassName("game_box");
const game_text = document.getElementsByClassName("game_text");
const message_popup = document.getElementById("message_popup");
const playerone_score = document.querySelectorAll(".plone_score");
const playertwo_score = document.querySelectorAll(".pltwo_score");
var iswon = false;
var playerTurn;


const score = {
    "playerone" : 0,
    "playertwo" : 0
}
playerone_score[0].innerText = score.playerone;
playerone_score[1].innerText = score.playerone;
playertwo_score[0].innerText = score.playertwo;
playertwo_score[1].innerText = score.playertwo;
if(playerOneName.innerHTML == "" || playerTwoName.innerHTML == ""){
    user_details.style.display = "block";
    add_user.addEventListener("click",()=>{
        const userOneName = document.getElementById("pone_name").value;
        const userTwoName = document.getElementById("ptwo_name").value;
        user_details.style.display = "none";
        playerOneName.innerHTML = userOneName;
        playerTwoName.innerHTML = userTwoName;
        set_turn("X");
    })
}



function set_turn(turn){
    playerTurn = turn;
    if(playerTurn === "X"){
        document.getElementById("playone_turn").innerHTML = "*";
        document.getElementById("playtwo_turn").innerHTML = "";
    }else if(playerTurn === "0"){
        document.getElementById("playtwo_turn").innerHTML = "*";
        document.getElementById("playone_turn").innerHTML = "";
    }
}

const conditions_for_win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function check_winner(){   
    conditions_for_win.forEach((elem) => {
        if((game_text[elem[0]].innerText === game_text[elem[1]].innerText) && (game_text[elem[2]].innerText === game_text[elem[1]].innerText) && (game_text[elem[0]].innerText !== "")){
            iswon = true;
            if(iswon === true){
                setTimeout(() => {
                    message_popup.style.display = "block";
                    if(playerTurn === "X"){
                        score.playerone  = score.playerone + 10;
                        playerone_score[0].innerText = score.playerone;
                        playerone_score[1].innerText = score.playerone;
                    }else{
                        score.playertwo = score.playertwo + 10;
                        playertwo_score[0].innerText = score.playertwo;
                        playertwo_score[1].innerText = score.playertwo;
                    }
                }, 400);
            }
        }
    })
    if(iswon === false){
        if(playerTurn === "X"){
            set_turn("0");
        }else if(playerTurn === "0"){
            set_turn("X");
        }
    }
}


Array.from(game_box).forEach((element, id) => {
    element.addEventListener("click",()=>{
        if(game_text[id].innerHTML === ""){
            game_text[id].innerHTML = playerTurn;
            check_winner();
        }
    })
})


document.getElementById("reset_game").addEventListener("click",() =>{
    for(var i = 0; i < document.querySelectorAll(".game_text").length; i++){
        document.querySelectorAll(".game_text")[i].innerHTML = "";
    }
})
document.getElementById("re_challenge").addEventListener("click",() =>{
    iswon = false;
    message_popup.style.display = "none";
    for(var i = 0; i < document.querySelectorAll(".game_text").length; i++){
        document.querySelectorAll(".game_text")[i].innerHTML = "";
    }
})
document.getElementById("close").addEventListener("click",() =>{
    iswon = false;
    message_popup.style.display = "none";
})