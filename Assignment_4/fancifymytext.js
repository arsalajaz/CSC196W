const textArea = document.getElementById("text");

function biggerBtnClickHandler() {
    textArea.style.fontSize = "24pt";
}

function fancifyBtnChangeHandler() {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function boringBtnChangeHandler() {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooBtnClickHandler() {
    textArea.value = textArea.value.toUpperCase();
    textArea.value = textArea.value.split(".").join("-Moo.");
}



