const lineContainer = document.querySelector(".line-container")
const intro = document.querySelector(".intro")
const draw = document.querySelector(".draw")
const main = document.getElementById("main");
const colors = document.querySelector(".coloress")


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
  };

let ms;
let index;
let isHolding;

const gridItems = document.querySelectorAll(".grid-item")

const gridList =Array.from(gridItems)

draw.addEventListener("mouseover",(e)=>{
 index = gridList.indexOf(e.target);
   

})
draw.addEventListener("mousedown",(e)=>{
  e.preventDefault();
  isHolding = true;
  if (isHolding === true) {
    ms = setInterval(() => {
gridItems[index].style.backgroundColor = colors.value;
      console.log(index);
    }, 0);
  }
})
draw.addEventListener("mouseup", () => {
  
  clearInterval(ms);
  isHolding = null;
  ms = 1;
  
});
 }
makeRows(16,16);

window.addEventListener('dragstart', event => {
  event.preventDefault();
});

window.addEventListener('drop', event => {
  event.preventDefault();
});
