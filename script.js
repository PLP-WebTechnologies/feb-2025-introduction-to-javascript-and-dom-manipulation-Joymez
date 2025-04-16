document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("text").textContent = "Text changed!";
});

document.getElementById("changeStyleButton").addEventListener("click", function() {
    const styledText = document.getElementById("styledText");
    styledText.style.color = "blue";
    styledText.style.fontSize = "18px";
    styledText.style.fontWeight = "bold";
});

document.getElementById("addElementButton").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "New element added!";
    document.getElementById("dynamicContent").appendChild(newElement);
});

document.getElementById("removeElementButton").addEventListener("click", function() {
    const newElement = document.querySelector("#dynamicContent p");
    if (newElement) {
        newElement.remove();
    }
});