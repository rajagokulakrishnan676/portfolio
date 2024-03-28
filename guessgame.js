let field = document.getElementById("field");
        let result = document.getElementById("result");
        let scoreDisplay = document.getElementById("score");
        let score = 10; 
        let randomNumber = Math.floor(Math.random() * 10) + 1;

        function checkTheNumber() {
            let guess = field.value;
            if (guess === "") {
                result.textContent = "Please enter a valid number between 1 and 10.";
                return;
            }
            
            if (guess === randomNumber) {
                result.textContent = "Congratulations! You guessed it right.";
                score++;
            } else {
                result.textContent = "Sorry, you guessed it wrong. Try again.";
                score--;
            }if(score === 0){
                alert("Press refresh button to restart the game! or Press ok button to Continue the Game!")
            }
            scoreDisplay.textContent = "Score: " + score;
        }