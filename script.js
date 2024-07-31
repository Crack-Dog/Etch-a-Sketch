console.log("Hello");

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