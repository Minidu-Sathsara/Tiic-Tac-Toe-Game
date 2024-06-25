let rows = document.querySelectorAll(".row");
let cells = document.querySelectorAll(".cell");
let board= Array.from({length:3},()=>Array(3).fill(null));

rows.forEach((row,r)) => ((row.id=r));
cells.forEach((cell,id)) => ((cell.id=id %3));

let crossPlaying = true;

cells.forEach((cell)){
    if (cell.classList.contains("")) {
        crossPlaying = false;
    }
}