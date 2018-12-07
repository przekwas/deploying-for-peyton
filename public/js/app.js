//Cells
let cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameOver = false;
let moveCount = 0;


cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});




//Click
function cellClicked(e) {
    
    if(gameOver) {
        reloadPage(e);    
    }; 
    if (e.target.textContent !== "") {
        return;
    };
    
    e.target.textContent = currentPlayer;
    togglePlayer(),
    xWinnerCheck(),
    oWinnerCheck();

    if(countMoves() === 9 && !xWinnerCheck() && !oWinnerCheck()) {
        resultsDiv.textContent = "Draw!";
        gameOver = true;
    }
    
};




//announcer
let resultsDiv = document.getElementById("announcer");

 

function reloadPage(e) {
    document.location.reload();
};


//drawlength
let cell0 = cells[0].innerHTML;
//console.log("length is 0");
let cell1 = cells[1].innerHTML;
let cell2 = cells[2].innerHTML;
let cell3 = cells[3].innerHTML;
let cell4 = cells[4].innerHTML;
let cell5 = cells[5].innerHTML;
let cell6 = cells[6].innerHTML;
let cell7 = cells[7].innerHTML;
let cell8 = cells[8].innerHTML;

let c0 = cell0.length;
let c1 = cell1.length;
let c2 = cell2.length;
let c3 = cell3.length;
let c4 = cell4.length;
let c5 = cell5.length;
let c6 = cell6.length;
let c7 = cell7.length;
let c8 = cell8.length;


//idea: Layman's Terms: if the text content of ALL cells equals either X or O, and the winner functions
function countMoves() {
   moveCount++;
   return moveCount;
   };





//toggle player function
function togglePlayer() {
    if(currentPlayer === "X") {
        currentPlayer = "O"
    }   else {
        currentPlayer = "X"
    };
};










//X WINNER FUNCTIONS//
function xWinnerCheck() {
    if(xCheckTop() || xCheckMiddleRow() || xCheckBottom() ||  xLeftColumn() || xMiddleColumn() || xRightColumn() || xDownLeft() || xDownRight()) {
        resultsDiv.textContent = "X's Win!"
        gameOver = true;
    }
    return false;
};  

//rows
function xCheckTop() {
    if(cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X") {
        return true;
    }
    return false;    
};  

function xCheckMiddleRow() {
    if(cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X") {
        return true;
    }
    return false;
};  

function xCheckBottom() {
    if(cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X") {
        return true;
    }
    return false;
};  

//columns
function xLeftColumn() {
    if(cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X") {
        return true;
    }
    return false;
};  

function xMiddleColumn() {
    if(cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X") {
        return true;
    }
     return false;
}; 

function xRightColumn() {
    if(cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X") {
        return true;
    }
    return false;
};  

//diagonals
function xDownRight() {
    if(cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") {
        return true;
    }
    return false;
};  

function xDownLeft() {
    if(cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X") {
        return true;
    }
    return false;
};  


//O WINNER FUNCTIONS//

function oWinnerCheck() {
    if(oCheckTop() || oCheckMiddleRow() || oCheckBottom() || oLeftColumn() || oMiddleColumn() || oRightColumn() || oDownLeft() || oDownRight()) {
        resultsDiv.textContent = "O's Win!";
        gameOver = true;
    }
    gameOVer = false;
};
    

//rows
function oCheckTop() {
    if(cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O") {
        return true;
    }
    return false;
};
       

function oCheckMiddleRow() {
    if(cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O") {
        return true;
    }
    return false;
};

function oCheckBottom() {
    if(cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O") {
        return true;
    }
    return false;
};

//columns
function oLeftColumn() {
    if(cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O") {
        return true;
    }
    return false;
};

function oMiddleColumn() {
    if(cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O") {
        return true;
    }
    return false;
};  

function oRightColumn() {
    if(cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O") {
        return true;
    }
    return false;
};  

//diagonals
function oDownRight() {
    if(cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") {
        return true;
    }
    return false;
};  

function oDownLeft() {
    if(cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O") {
        return true;
    }
    return false;
};  
