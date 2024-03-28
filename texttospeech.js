let inputfield = document.getElementById("inputfield");
let content = document.getElementById("content");

function speak(){
    let txttospeak = new SpeechSynthesisUtterance(inputfield.value);
    window.speechSynthesis.speak(txttospeak);
}