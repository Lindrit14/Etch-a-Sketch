let colorPicked = "#000000";
let divPerRowGrid = 16; 


const mainContainer = document.querySelector(".mainContainer");
const buttonChangeBackground = document.querySelector(".changeBackground")
const colorPicker = document.getElementById("colorPicker");
const widthMainContainer = document.getElementById("propertyMainContainer").clientWidth;
const gridRange = document.querySelector("#gridRange");


function renderFirstTimeGrid(){
    for(i=1;i<=divPerRowGrid*divPerRowGrid;i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "pixel";
        newDiv.style.width = (widthMainContainer / divPerRowGrid) + "px";
        newDiv.style.height = (widthMainContainer / divPerRowGrid) + "px";
        mainContainer.appendChild(newDiv);
    }
    console.log("Grid rendered for the first time");
};

function changeColor(){
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div) => {
        div.addEventListener("mousedown", (e)=>{
            div.style.backgroundColor = colorPicked;
            console.log(e.target);
        })
        div.addEventListener("mousemove", ()=>{
            div.style.backgroundColor = colorPicked;
            console.log()
        })
      
    })
};

function removeGrid(){
    const newDiv = document.querySelectorAll(".pixel");
    newDiv.forEach((div)=>{
        div.remove(); 
    })
};

function renderNewGrid(){
    for(i=1;i<=divPerRowGrid*divPerRowGrid;i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "pixel";
        newDiv.style.width = (widthMainContainer / divPerRowGrid) + "px";
        newDiv.style.height = (widthMainContainer / divPerRowGrid) + "px";
        mainContainer.appendChild(newDiv);
    }
}

colorPicker.addEventListener("input", (e)=>{
    colorPicked = e.target.value;
    console.log(colorPicked);
});



gridRange.addEventListener("click", (e)=>{
    divPerRowGrid = e.target.value;
    removeGrid();
    renderNewGrid(); 
    changeColor();
    console.log(e.target.value)
});
window.onload = renderFirstTimeGrid();
window.onload = changeColor();





