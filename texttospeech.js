let inputfield = document.getElementById("inputfield");


function speak() {
    let textToSpeak = inputfield.value.trim();
    if (textToSpeak !== '') {
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        // utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Your Preferred Voice');
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Please enter some text to speak.");
    }
}