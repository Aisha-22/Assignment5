var getBlock = document.getElementById("block");
var getWall = document.getElementById("wall");

var WallTopPos = getWall.offsetTop;
var wallLeftPos = getWall.offsetLeft;



let wallWidth = 800;
let wallHeight = 600;

let blockWidth = 100;
let blockHeight = 80;




//draw wall
getWall.style.width = wallWidth + "px"
getWall.style.height = wallHeight + "px";
//draw block
getBlock.style.width = blockWidth + "px"
getBlock.style.height = blockHeight + "px";
//color block and wall
getWall.style.backgroundColor = "rgb(31, 82, 65)";
getBlock.style.backgroundColor = "chocolate";

let deltaX = WallTopPos + 10;
let deltaY = wallLeftPos + 10;

//position the block
blockTopPos = getBlock.style.top = deltaY + "px";
getBlock.style.left = deltaX + "px";

deltaY = getBlock.offsetTop;
deltaX = getBlock.offsetLeft;

//center Wall
//  document.getElementById("wall").style.margin = "auto";

if (deltaX <= wallLeftPos || deltaY <= WallTopPos) {
    setInterval(function() { 

        if (blockTopPos < WallTopPos || blockLeftPos < wallLeftPos ) {
            document.getElementById("block").style.top = 100 + "px";
            document.getElementById("block").style.left = 100 + "px";
        } else {
           
        }
        
        
        }, 1000);
}

document.addEventListener('keydown', moveBlock);
console.log("the block top is now " + deltaY);
console.log("the block left is now " + deltaX);

console.log("the wall top is now " + WallTopPos);
console.log("the wall left is now " + wallLeftPos);