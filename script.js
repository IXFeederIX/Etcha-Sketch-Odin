const lineContainer = document.querySelector(".line-container")
const intro = document.querySelector(".intro")
const zoom = document.querySelector(".zoom")
const main = document.getElementById("main");
const colors = document.querySelector(".coloress")
const alert = document.querySelector(".alert")
const pencil = document.querySelector(".pencil")
const eraser = document.querySelector(".eraser")
const fullscreen = document.querySelector(".fullscreen")
const colorsDiv = document.querySelector(".color-container")
const SeeCells = document.querySelector(".hide-cells")
const download = document.querySelector(".download")
const close = document.querySelector(".close")
const restoreScreen = document.querySelector(".restoreScreen")
const minimap = document.createElement("div")
let index;
 let newX;
  let newY;
 let mouseDown = false;
 let watchCells = true;
 let dragEnabled = false;
 let fullScreenEnabled = false;

 const draw = document.querySelector(".draw")

function createLines(){
	for (let i = 0; i < 100; i++) {
	const newLines = document.createElement("div");
	newLines.classList.add("line")
	lineContainer.appendChild(newLines)
}
}
createLines()
const buttonStart = document.getElementById("button")
buttonStart.addEventListener("click",(e)=>{
	intro.style.display="none";
	main.style.display = "block";
document.body.appendChild(minimap)
minimap.classList.add("minimap")
})

function makeRows(rows, cols) {
const minimapGrid = document.createElement("div")
minimap.appendChild(minimapGrid)
minimapGrid.classList.add("minimapGrid")
  draw.style.setProperty("--grid-rows", rows);
  draw.style.setProperty("--grid-cols", cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    draw.appendChild(cell).className = "grid-item";
    const gridItems = document.querySelectorAll(".grid-item")

    const gridArray = Array.from(gridItems)

function eraseColor(){
  for(let i = 0; i < gridItems.length; i++){
    gridItems[i].style.backgroundColor = "white";
  }
}


eraser.addEventListener("click",(e)=>{
  eraseColor()
})
    cell.addEventListener("click",(e)=>{
  const target = e.target;
   if (target.classList.contains("grid-item")) {
    index = gridArray.indexOf(target);

   
      gridItems[index].style.backgroundColor = colors.value;
    
  }
})

cell.addEventListener("mouseover",(e)=>{
  const target = e.target;
   if (target.classList.contains("grid-item") && mouseDown === true) {
    index = gridArray.indexOf(target);

   
      gridItems[index].style.backgroundColor = colors.value;
    
  }

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

if(mouseDown === false){
  alert.style.backgroundColor = "red";

}else{
  alert.style.backgroundColor = "green";
}
if(colors.value !== ""){
pencil.style.backgroundColor = "lightgray";
}

})

  };

  download.addEventListener("click",(e)=>{
    html2canvas(draw)
    .then(canvas =>{
    let enlace = document.createElement('a');
      enlace.download = "myDraw.png";
  
      enlace.href = canvas.toDataURL();

      enlace.click();
    })
  })

 }
 const rowsInput = document.querySelector("input[name='rows']");
const colsInput = document.querySelector("input[name='cols']");

makeRows(rowsInput.value, colsInput.value);


window.addEventListener('dragstart', event => {
  event.preventDefault();
});

window.addEventListener('drop', event => {
  event.preventDefault();
});
fullscreen.addEventListener("click",(e)=>{
setTimeout(()=>{


draw.style.width = "100%"
draw.style.right = "0";
zoom.style.display = "block";
fullScreenEnabled = true;
draw.style.boxShadow = "";
if(draw.childElementCount > 0){
  for (let i = 0; i < draw.childElementCount; i++) {
    if (draw.children[i].classList.contains("grid-item")) {
 
    }
  }

}
},1000)
})

let zoomLevel = 1.0;
close.addEventListener("click",(e)=>{
 draw.style.left = "";
    draw.style.top = "";
    newX = "";
  newY = "";
  setTimeout(()=>{
  draw.style.width = "50%"
draw.style.right = "15%";
zoom.style.display = "none";
 zoomLevel = 1.0;
  draw.style.transform = "scale(" + zoomLevel + ")"
draw.style.boxShadow = "4px 4px 4px 4px rgba(0, 0, 0, 0.1)";
fullScreenEnabled = false;
  },1000)


})

draw.addEventListener("mousedown", function(event) {
if(event.ctrlKey && !dragEnabled && fullScreenEnabled === true){
    this.originalX = event.clientX;
  this.originalY = event.clientY;
  console.log(this.style.left)
  dragEnabled = true;
  fullScreenEnabled = true;
}

});

draw.addEventListener("mousemove", function(event) {

  if (dragEnabled) {
 newX = event.clientX - this.originalX;
  newY = event.clientY - this.originalY;

  // Move the div to the new position.
  this.style.left = newX + "px";
  this.style.top = newY + "px";
  console.log(this.style.left)
}
event.preventDefault()
if (!event.ctrlKey) {
  dragEnabled = false;
    draw.style.left = newX + "px";
    draw.style.top = newY + "px";
  }

});
restoreScreen.addEventListener("click",(e)=>{
     draw.style.left = "";
    draw.style.top = "";
    newX = "";
  newY = "";
})
const zoomIn = document.querySelector(".zoomIn")
const zoomOut = document.querySelector(".zoomOut")

zoomIn.addEventListener("click", (e) => {
  zoomLevel = Math.min(zoomLevel + 0.1, 2.0); 

        draw.style.transform = "scale(" + zoomLevel + ")"

})
zoomOut.addEventListener("click", (e) => {
  zoomLevel = Math.max(zoomLevel - 0.1, 0.5); 

        draw.style.transform = "scale(" + zoomLevel + ")"
    
  

})
SeeCells.addEventListener("click",(e)=>{
if(draw.childElementCount > 0 && watchCells === true){
  for (let i = 0; i < draw.childElementCount; i++) {
    if (draw.children[i].classList.contains("grid-item")) {
    watchCells = false
    draw.children[i].style.border = "none";
    }
  }
 
}else if(draw.childElementCount > 0 && watchCells === false){
    for (let i = 0; i < draw.childElementCount; i++) {
    if (draw.children[i].classList.contains("grid-item")) {
    watchCells = true;
    draw.children[i].style.border = "1px solid lightgray";
    }
  }
 

}

})
