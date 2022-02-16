let colorPicked = "#000000";
let divPerRowGrid = 16;
//declare a variable that changes wether the mouse button has been clicked
let mouseDown = false;

const mainContainer = document.querySelector(".gridContainer");
const buttonChangeBackground = document.querySelector(".changeBackground")
const colorPicker = document.getElementById("colorPicker");
const widthMainContainer = document.getElementById("propertyMainContainer").clientWidth;
const gridRange = document.querySelector("#gridRange");
const rangeValueText = document.querySelector(".rangeValue");
const drawButton = document.querySelector(".draw");
const eraserButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clearBoard");  

// if on the whole body element the event gets triggered of mousedown, than mouseDown gets set to true
document.body.onmousedown = () => (mouseDown = true);
//if mouse goes back up, mouseDown gets set to false again.
document.body.onmouseup = () => (mouseDown = false);


function renderFirstTimeGrid() {
    for (i = 1; i <= divPerRowGrid * divPerRowGrid; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = "pixel";
        newDiv.style.width = (widthMainContainer / divPerRowGrid) + "px";
        newDiv.style.height = (widthMainContainer / divPerRowGrid) + "px";
        mainContainer.appendChild(newDiv);
    }
    console.log("Grid rendered for the first time");
};

function changeColor() {
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            //
            if(e.type === "mouseover" && !mouseDown){
                return;
            }else {
                div.style.backgroundColor = colorPicked;
            }
        })
        div.addEventListener("mousedown", () => {
            
            div.style.backgroundColor = colorPicked;
        })

    })
};

function removeGrid() {
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div) => {
        div.remove();
    })
};

function renderNewGrid() {
    for (i = 1; i <= divPerRowGrid * divPerRowGrid; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = "pixel";
        newDiv.style.width = (widthMainContainer / divPerRowGrid) + "px";
        newDiv.style.height = (widthMainContainer / divPerRowGrid) + "px";
        mainContainer.appendChild(newDiv);
    }
}

function draw(){
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div)=>{
        div.addEventListener("mousedown", ()=>{
            div.style.backgroundColor = colorPicked;
        })
        div.addEventListener("mouseover", (e) => {
            
            if(e.type === "mouseover" && !mouseDown){
                return;
            }else {
                div.style.backgroundColor = colorPicked;
            }
        })
    }
)
}

function eraser(){
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div)=>{
        div.addEventListener("mousedown", ()=>{
            div.style.backgroundColor = "#FFFFFF";
        })
        div.addEventListener("mouseover", (e) => {
            
            if(e.type === "mouseover" && !mouseDown){
                return;
            }else {
                div.style.backgroundColor = "#FFFFFF";
            }
        })
    }
)};

function clearAll(){
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div)=>{
        div.style.backgroundColor = "#d3d3d3";
    })
};


colorPicker.addEventListener("input", (e) => {
    colorPicked = e.target.value;
    
});



gridRange.addEventListener("click", (e) => {
    divPerRowGrid = e.target.value;
    removeGrid();
    renderNewGrid();
    changeColor();
    rangeValueText.textContent = e.target.value
    
    
});


drawButton.addEventListener("click", draw);

eraserButton.addEventListener("click", eraser);

clearButton.addEventListener("click", clearAll);

window.onload = renderFirstTimeGrid();
window.onload = changeColor();





