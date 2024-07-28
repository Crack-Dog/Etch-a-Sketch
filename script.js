console.log("Hello");

for (let i = 0; i <16; i++){
    for (let j = 0; j <16; j++){
    const sect = document.querySelector(".gridcontainer");
    const sqdivs = document.createElement("p");
    sqdivs.textContent = "Test";
    sect.appendChild(sqdivs);
    }
}