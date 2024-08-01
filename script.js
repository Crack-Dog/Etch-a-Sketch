console.log("Hello");


// Initialize initial grid
var gridLength = 16
createGrid(gridLength)


// Function to create grid
function createGrid(gridSize){

    // Find dimension of square
    const dimension = 100/gridSize + '%';

    // Nested for loop to create grid depending on var gridLength
    for (let i = 0; i < gridSize; i++){
            for (let j = 0; j < gridSize; j++){

            // Create grid square element
            const sect = document.querySelector("#gridcontainer");
            const sqdivs = document.createElement("div");
            sqdivs.classList.add('gridsq');
            sqdivs.textContent = "";

            // Sets size of each grid square
            sqdivs.style.width = dimension;
            sqdivs.style.height = dimension;

            sect.appendChild(sqdivs); // Add created square to container
            }
        }
}

// When mouse enters square, changes colour
document.body.addEventListener("mouseover", event =>{
    if(event.target.classList.contains("gridsq")){
        event.target.style.background = "black";
        console.log("test");
    }
})

// When mouse leaves square, changes colour
document.body.addEventListener("mouseout", event =>{
    if(event.target.classList.contains("gridsq")){
        event.target.style.background = "blue";
        console.log("test");
    }
})

// Create grid button functionality, asks for user input and sets it to gridLength
const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    gridLength = prompt("Enter grid length (ex: 16 for 16x16");
    if (gridLength > 100){
        gridLength = 100
    }
    document.querySelectorAll(".gridsq").forEach((event) => event.parentNode.removeChild(event));
    createGrid(gridLength);
})