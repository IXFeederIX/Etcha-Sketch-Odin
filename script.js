const lineContainer = document.querySelector(".line-container")
const intro = document.querySelector(".intro")

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
	
})