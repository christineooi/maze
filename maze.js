const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

maxCols = 21;
maxRows = 15;

var startTop=200;
var startLeft=200;

document.addEventListener('keydown', (event) => {
const keyName = event.key;
console.log('keydown event\n\n' + 'key: ' + keyName);
if (keyName === "ArrowDown"){
    startTop = startTop + 40;
}
if (keyName === "ArrowUp"){
    startTop = startTop - 40;
}
//document.getElementById("player").style.top = startTop + "px";

if (keyName === "ArrowLeft"){
    startLeft = startLeft - 40;
}
if (keyName === "ArrowRight"){
    startLeft = startLeft + 40;
}
//document.getElementById("player").style.left = startLeft + "px";
});

function createPlayer(){
    divEl = document.createElement("div");
    divEl.className = "cell player";
    divEl.style.top = "440px";
    document.getElementById("container").appendChild(divEl);  
}

function createDiv(type) {
    divEl = document.createElement("div");
    divEl.className = "cell " + type;
    document.getElementById("container").appendChild(divEl);       
}

function createMaze() {
    var divEl;
    createPlayer();
    for (var i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
            if (map[i].substr(j, 1) === "W") {
                createDiv("wall");
            }
            if (map[i].substr(j, 1) === " ") {
                createDiv("floor");
            }
            if (map[i].substr(j, 1) === "S") {
                createDiv("start");
            }
            if (map[i].substr(j, 1) === "F") {
                createDiv("finish");
            }
        
        }
    }

}

window.onload = function() {
    createMaze();
};