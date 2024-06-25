let rows = document.querySelectorAll(".row");
let cells = document.querySelectorAll(".cell");
let board= Array.from({length:3},()=>Array(3).fill(null));

rows.forEach((row,r) => (row.id=r));
cells.forEach((cell,id) => (cell.id=id %3));

let crossPlaying = true;

cells.forEach((cell) => {
    cell.addEventListener("click",()=>{
        if(!cell.classList.contains("idle"))return;

        let curRow = parseInt(cell.parentElement.id);
        let curCell= parseInt(cell.id);
        
        let currentplayer= crossPlaying ? "x" : "o";
        let playerClass = crossPlaying ? "cross" : "circle";

        board[curRow][curCell] = currentplayer;
        cell.classList.add(playerClass);
        cell.classList.remove("idle");

        crossPlaying = !crossPlaying;
    });
    });
        
    