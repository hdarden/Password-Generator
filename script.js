//when button is clicked on webpage
var generateBtn = document.querySelector("#generate");
    

// function object is to generate password
function generatePassword () {
    var clickHowMany = prompt("How many characters would you like your password to be?");
// if 8-128 then input is collected, else if not, line 27-32
    var clickSpec = confirm("Click ok to confirm including special characters?");
    var clickNumb = confirm("Click ok to confirm including numbers?");
    var clickLower = confirm("Click ok to confirm including lowercase letters?");
    var clickUpper = confirm("Click ok to confirm including uppercase letters?");

//Need an array of upper, lower, all numbers and special characters . 'push' what they chose into the array that they choose. 
//arrays

    var rUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var rLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var rNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var rSpecChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];



//user input of conditions
if (clickHowMany = i >= 8 || i <= 128 ) {
  userInput.push.noCharacters;
}
else {
  alert("must include 8-128 characters!!")
}

if (clickSpec){
   userInput.push.rUpper;
}

if (clickNumb) {
  userInput.push.rNumber;
}

if (clickLower); {
  userInput.push.rLower;
}

if (clickUpper); {
  userInput.push.rSpecChar;
}

//collection from user input^^^

userInput = []
console.log(userInput);  

return userInput;




}
///loop 
for (var i = 0; i < userInput; i ++)


// Write password to the #password input//// added (userInput)
function writePassword(userInput) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



//Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
}
