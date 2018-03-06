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


const mapArray = [];
for (let i = 0; i < map.length; i++) {
    mapArray.push([]);
    mapArray[i].push(...map[i].split(""));
  
}

// console.log("mapArray: " + JSON.stringify(mapArray));

maxCols = 21;
maxRows = 15;

var startTop=360;
var startLeft=1;


var gameOver = false;

function setMessage(msg){
    var msgEl = document.getElementById("message"); 
    msgEl.innerHTML = msg;
}

document.addEventListener('keydown', (event) => {
    // setMessage("");
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    if (!gameOver) {

        outerloop: for (let i = 0; i < mapArray.length; i++) {
        innerloop:    for (let j = 0; j < mapArray[i].length; j++) {

                        if (mapArray[i][j] === "S" && mapArray[i][j+1] === " " && keyName === "ArrowRight") {
                            startLeft = startLeft + 40;
                            document.getElementById("player").style.left = startLeft + "px";
                            mapArray[i][j] = " ";
                            mapArray[i][j+1] = "S";
                            break outerloop;
                        } else if (mapArray[i][j] === "S" && mapArray[i-1][j] === " " && keyName === "ArrowUp") {
                            startTop = startTop - 40;
                            document.getElementById("player").style.top = startTop + "px";
                            mapArray[i][j] = " ";
                            mapArray[i-1][j] = "S";
                            break outerloop;
                        } else if (mapArray[i][j] === "S" && mapArray[i+1][j] === " " && keyName === "ArrowDown") {
                            startTop = startTop + 40;
                            document.getElementById("player").style.top = startTop + "px";
                            mapArray[i][j] = " ";
                            mapArray[i+1][j] = "S";
                            break outerloop;
                        } else if (mapArray[i][j] === "S" && mapArray[i][j-1] === " " && keyName === "ArrowLeft") {
                            startLeft = startLeft - 40;
                            document.getElementById("player").style.left = startLeft + "px";
                            mapArray[i][j] = " ";
                            mapArray[i][j-1] = "S";
                            break outerloop;
                        } else if (mapArray[i][j] === "S" && mapArray[i][j+1] === "F" && keyName === "ArrowRight") {
                            startLeft = startLeft + 40;
                            document.getElementById("player").style.left = startLeft + "px";
                            mapArray[i][j] = " ";
                            mapArray[i][j+1] = "S"; 
                            setMessage("You have completed the maze!");
                            gameOver = true;
                        }
                    } 
                }
            }

});


function createPlayer(){
    divEl = document.createElement("div");
    divEl.className = "cell player";
    divEl.setAttribute("id", "player");
    divEl.style.top = startTop + "px";
    divEl.style.left = startLeft + "px";
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