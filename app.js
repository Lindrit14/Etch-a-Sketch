let colorPicked;
let divPerRowGrid = 16; 
const widthMainContainer = document.getElementById("propertyMainContainer").clientWidth;
const heightMainContainer = document.getElementById("propertyMainContainer").clientHeight;

const mainContainer = document.querySelector(".mainContainer");
const tempButtonAdd = document.querySelector(".add");
const tempButtonRemove = document.querySelector(".remove");
const buttonChangeBackground = document.querySelector(".changeBackground")
const colorPicker = document.getElementById("colorPicker");



function renderFirstTimeGrid(){
    for(i=1;i<=divPerRowGrid*divPerRowGrid;i++){
        const newDiv = document.createElement("div");
        newDiv.classList = "pixel";
        newDiv.style.width = (widthMainContainer / divPerRowGrid) + "px";
        newDiv.style.height = (widthMainContainer / divPerRowGrid) + "px";
        mainContainer.appendChild(newDiv);
    };
    console.log("Grid rendered for the first time");
};





function removeDiv(){
    const newDiv = document.querySelectorAll(".pixel");
    
    newDiv.forEach((div) => {
        div.remove();
    })
}

function changeBackground(){
    const newDiv = document.querySelectorAll(".pixel");

    newDiv.forEach((div)=>{
        div.style.backgroundColor=colorPicked;
})
}

colorPicker.addEventListener("input", (e)=>{
    colorPicked = e.target.value;
})


window.onload = renderFirstTimeGrid();


tempButtonRemove.addEventListener("click", removeDiv);

buttonChangeBackground.addEventListener("click", changeBackground);


