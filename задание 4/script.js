function toggleContent() {
    var text = document.getElementById("expandable-text");
    var image = document.getElementById("expandable-image");
    var button = document.getElementById("toggle-button");

    text.classList.toggle("expanded");
    image.classList.toggle("expanded");

    if (text.classList.contains("expanded")) {
        button.textContent = "Collapse Content";
    } else {
        button.textContent = "Expand Content";
    }
}
