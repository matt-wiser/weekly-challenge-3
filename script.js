// Assignment Code
var generateBtn = document.querySelector("#generate");
// declares variables that contain all possible desired characters as well as an empty string to hold user selected character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordCharacters = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // checks to see if password returns an undefined value or a valid value
  if (password){
    passwordText.value = password;
  }
}

function generatePassword(){
  var password = "";

  //prompts user for a password length and converts it to an integer
  var passwordLength = window.prompt("Choose a password length, an integer between 8 and 128");
  passwordLength = parseInt(passwordLength);  

  //checks that password length is of an acceptable length, if so proceeds with generation logic
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Sorry this is not an acceptable value, please try again.");
    return;
  } else {
    //checks if lower case characters are desired within the password and adds them to the character set if so
    var checkLowerCase = window.confirm("Would you like to include lower case characters in your password? Click Ok for Yes or Cancel for No");
    if (checkLowerCase){
      passwordCharacters += lowerCase;
    }

    //checks if upper case characters are desired within the password and adds them to the character set if so
    var checkUpperCase = window.confirm("Would you like to include upper case characters in your password? Click Ok for Yes or Cancel for No");
    if (checkUpperCase){
      passwordCharacters += upperCase;
    }
    
    //checks if numbers are desired within the password and adds them to the character set if so
    var checkNumbers = window.confirm("Would you like to include numbers in your password? Click Ok for Yes or Cancel for No");
    if (checkNumbers){
      passwordCharacters += numbers;
    }
    
    //checks if special characters are desired within the password and adds them to the character set if so
    var checkSpecialCharacters = window.confirm("Would you like to include special characters in your password? Click Ok for Yes or Cancel for No");
    if (checkSpecialCharacters){
      passwordCharacters += specialCharacters;    
    }
    
    //checks that at least one character set has been chosen
    if (!checkLowerCase && !checkUpperCase && !checkNumbers && !checkSpecialCharacters){
      window.alert("Sorry, you must choose at least one character set, please try again");
      return;
    }
    
    // if at least one character set has been chosen, generates a random password by choosing a random character one at a time from the passwordCharacters string
    for (let i = 0; i < passwordLength; i++) {
      password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }
      return password;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
