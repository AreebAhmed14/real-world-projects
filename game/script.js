
function startGame(){
    document.querySelector(".formvisi").style.display="none"
}

let playerName = document.getElementById("playerName")

let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");
let namechange = document.getElementById("namechange")



let boxes = document.querySelectorAll(".box");
namechange.textContent = "Player x "


let player1 = true;
let palyer2 = false;

boxes.forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent === "") {
            if (player1) {
                element.textContent = "X";
                player1 = false;
                palyer2 = true;
                namechange.textContent = "Player o "
            } else if(palyer2){
                element.textContent = "O";
                player1 = true;
                palyer2 = false;
                namechange.textContent = "Player x "

            }
            checkWinner();
        }
    });
});

function checkWinner() {
    // Check rows, columns, and diagonals for X
    if (
        (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") ||
        (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") ||
        (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") ||
        (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") ||
        (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") ||
        (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") ||
        (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") ||
        (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X") ||
        (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") 
    ) {
        document.querySelector(".winpage1").style.display="block"

    } 
    // Check rows, columns, and diagonals for O
    else if (
        (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") ||
        (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") ||
        (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") ||
        (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") ||
        (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") ||
        (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") ||
        (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") ||
        (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O") ||
        (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O")
    ) {
        document.querySelector(".winpage2").style.display="block"

    }
    else if(
        
        (box1.textContent !== "" && box2.textContent !== "" && box3.textContent !== "") &&
        (box4.textContent !== "" && box5.textContent !== "" && box6.textContent !== "") &&
        (box7.textContent !== "" && box8.textContent !== "" && box9.textContent !== "")  
    ){
        document.querySelector(".winpageD").style.display="block"

    }
}

function resetBoard() {
    boxes.forEach(box => {
        box.textContent = "";
    });
    player1 = true;
    document.querySelector(".winpage1").style.display="none"
    document.querySelector(".winpage2").style.display="none"
    document.querySelector(".winpageD").style.display="none"
    namechange.textContent = "Player x "
}


