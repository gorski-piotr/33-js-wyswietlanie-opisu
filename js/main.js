let myParagraph = document.getElementById("opis");

let myButton = document.querySelector("button");

function addText() {
    myParagraph.textContent = "Oto opis produktu";
}

myButton.onclick = addText;