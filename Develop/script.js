var getPasswordLength = function() {
  length = "";
  while (length === "" || length === null) {
    length = prompt("How long would you like your password to be? (8 to 128 characters)");
      while (length < 8 || length > 128) {
        alert("Please enter valid password character length.");
        length = prompt("How long would you like your password to be? (8 to 128 characters)");
      }
  }
  return length
};
// Assignment code here
var passwordElements = function() {
  var length = getPasswordLength();
  var lower = confirm("Add lowercase characters?");
  var upper = confirm("Add uppercase characters?");
  var numeric = confirm("Add numeric characters?");
  var special = confirm("Add special characters?");
  var elements = 0

  if (upper) {
    elements++;
  }
  if (numeric) {
    elements++;
  }
  if (special) {
    elements++;
  }
  if (lower) {
    elements++
  }

  var numCharacters = Math.floor(length / elements);
  
  var passwordInfo = {
    len: length,
    low: lower,
    up: upper,
    num: numeric,
    spec: special,
    numChar: numCharacters
  };

  return passwordInfo;
};

var getUppercase = function(num) {
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperEl = "";
  for (var i = 0; i < num; i++) {
    upperEl += upperCharacters[Math.floor(Math.random() * 25)];
  }
  return upperEl;
};

var generatePassword = function() {
  var passwordInfo = passwordElements();
  var password = "";
  var passwordLength = passwordInfo.len;

  if (passwordInfo.up) {
    password += getUppercase(passwordInfo.numChar);
    passwordLength -= passwordInfo.numChar;
  }
  console.log(passwordLength);
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
