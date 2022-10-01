var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "<", "?", "@", "^", "_", "`", "{", "|", "{", "~"]
var passLoad = [];


function generatePassword() {


  var pwLength = prompt("How long would you like your Password to be? Please enter at least 8 and no more than 128.");

  var placeHolder = document.querySelector("#password[placeholder]").textContent;

 
  if (pwLength === null) {
    if (passLoad) {
      return passLoad.join("");
    }
    return placeHolder;
  }

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) === true) {

    alert("WRONG ANSWER!!!! Need atleast 8 - 128.");
    return generatePassword();
  }
  else {
    passwordN.pwLength = pwLength;
  }

  promptUser();

  if (passLoad) {
    passLoad = [];
  
    for (var i = 0; i < pwLength; i++) {
      randomChar();
    }
  }

  return passLoad.join("");
};


function promptUser() {

  var confirmCapital = confirm("Would you like capital letters?");
  passwordN.includeUpper = confirmCapital;

  var confirmLower = confirm("Would you like lower case letters?");
  passwordN.includeLower = confirmLower;

  var confirmNum = confirm("Would you like numbers?");
  passwordN.includeNum = confirmNum;

  var confirmSpecial = confirm("Would you like special characters?");
  passwordN.includeSpecial = confirmSpecial;

  if (passwordN.includeUpper === false && passwordN.includeLower === false && passwordN.includeNum === false && passwordN.includeSpecial === false) {
    alert("You have not slected any options please choose an question to be able to generate a password! ");
    return promptUser();
  }
}



var passwordN = {
  pwLength: 0,
  includeUpper: null,
  includeLower: null,
  includeNum: null,
  includeSpecial: null
}

function randomChar() {
  var PassNumbA = [];

  if (passwordN.includeUpper === true) {
    PassNumbA = PassNumbA.concat(upperCase);
  }

  if (passwordN.includeLower === true) {
    PassNumbA = PassNumbA.concat(lowerCase);
  }

  if (passwordN.includeNum === true) {
    PassNumbA = PassNumbA.concat(numberArray);
  }

  if (passwordN.includeSpecial === true) {
    PassNumbA = PassNumbA.concat(specialArray);
  }

  var randomCharSelected = PassNumbA[Math.floor(Math.random() * PassNumbA.length)];

  return passLoad = passLoad.concat(randomCharSelected);
}


var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);