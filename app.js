const mainContainer = document.querySelector(".mainContainer");
const tempButtonAdd = document.querySelector(".add");
const tempButtonRemove = document.querySelector(".remove");
const buttonChangeBackground = document.querySelector(".changeBackground")
const colorPicker = document.getElementById("colorPicker");

let userInput = parseInt(prompt("How many divs?"));
function addDiv(){

    if(userInput >=101){
        alert("To big of a number");
    }else{
        userInput *= userInput; 
        for(i=0;i<userInput;i++){
            const newDiv = document.createElement("div");
            newDiv.className = "pixel";
            mainContainer.appendChild(newDiv);
            console.log("Yo");
        }
    }
}

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
let colorPicked;

colorPicker.addEventListener("input", (e)=>{
    colorPicked = e.target.value;
})



tempButtonAdd.addEventListener("click", addDiv);

tempButtonRemove.addEventListener("click", removeDiv);

buttonChangeBackground.addEventListener("click", changeBackground);


