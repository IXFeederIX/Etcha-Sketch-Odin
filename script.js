const lineContainer = document.querySelector(".line-container")
const intro = document.querySelector(".intro")
const draw = document.querySelector(".draw")
const main = document.getElementById("main");
const colors = document.querySelector(".coloress")
const alert = document.querySelector(".alert")
const pencil = document.querySelector(".pencil")
const eraser = document.querySelector(".eraser")
let index;
 let mouseDown = false;

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
})

function makeRows(rows, cols) {
	draw.style.overflow = "scroll";
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


 }
makeRows(16,16);

window.addEventListener('dragstart', event => {
  event.preventDefault();
});

window.addEventListener('drop', event => {
  event.preventDefault();
});
