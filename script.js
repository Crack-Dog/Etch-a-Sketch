console.log("Hello");

var gridLength = 0
createGrid(gridLength)

function createGrid(gridSize){
    if (gridLength = 0){
        for (let i = 0; i <16; i++){
            for (let j = 0; j <16; j++){
            const sect = document.querySelector(".gridcontainer");
            const sqdivs = document.createElement("div");
            sqdivs.classList.add('gridsq');
            sqdivs.textContent = "Test";
            sect.appendChild(sqdivs);
            }
        }
    }
    else{
        for (let i = 0; i < gridSize; i++){
            for (let j = 0; j < gridSize; j++){
            const sect = document.querySelector(".gridcontainer");
            const sqdivs = document.createElement("div");
            sqdivs.classList.add('gridsq');
            sqdivs.textContent = "Test";
            sect.appendChild(sqdivs);
            }
        }
    }
}
for (let i = 0; i <16; i++){
    for (let j = 0; j <16; j++){
    const sect = document.querySelector(".gridcontainer");
    const sqdivs = document.createElement("div");
    sqdivs.classList.add('gridsq');
    sqdivs.textContent = "Test";
    sect.appendChild(sqdivs);
    }
}

document.body.addEventListener("mouseover", event =>{
    if(event.target.classList.contains("gridsq")){
        event.target.style.background = "black";
        console.log("test");
    }
})

document.body.addEventListener("mouseout", event =>{
    if(event.target.classList.contains("gridsq")){
        event.target.style.background = "blue";
        console.log("test");
    }
})

var gridLength = 0

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    gridLength = prompt("Enter grid length (ex: 16 for 16x16");
    if (gridLength > 100){
        gridLength = 100
    }
    document.querySelectorAll(".gridsq").forEach((event) => event.parentNode.removeChild(event));
    createGrid(gridLength);
})