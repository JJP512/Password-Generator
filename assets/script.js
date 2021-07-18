// receives password length from user and confirms it is a valid input
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
// receives password elements wanted from user
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
  // converts elements collected into an object
  var passwordInfo = {
    len: length,
    low: lower,
    up: upper,
    num: numeric,
    spec: special,
    numChar: numCharacters
  };
  // object is then returned to generate function
  return passwordInfo;
};
// returns given number of randomly selected uppercase characters
var getUppercase = function(num) {
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperEl = "";
  for (var i = 0; i < num; i++) {
    upperEl += upperCharacters[Math.floor(Math.random() * 25)];
  }
  return upperEl;
};
// returns given number of randomly selected numerical characters
var getNumerical = function(num) {
  var numericalCharacters = "0123456789";
  var numEl = "";
  for (var i = 0; i < num; i++) {
    numEl += numericalCharacters[Math.floor(Math.random() * 9)];
  }
  return numEl;
};
// returns given number of randomly selected special characters
var getSpecial = function(num) {
  var specialCharacters = "!#$%&@?/][~+=-*";
  var specEl = "";
  for (var i = 0; i < num; i++) {
    specEl += specialCharacters[Math.floor(Math.random() * 14)];
  }
  return specEl;
};
// returns given number of randomly selected lowercase characters
var getLowercase = function(num) {
  var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  var lowerEl = "";
  for (var i = 0; i < num; i++) {
    lowerEl += lowerCharacters[Math.floor(Math.random() * 25)];
  }
  return lowerEl;
};

// original password is rewritten in randomized order for finalized password
var randomize = function(password) {
  var finalPass = "";
  var originalPass = password;
  for (var i = 0; i < password.length; i++) {
    remainingChars = originalPass.length;
    newChar = originalPass[Math.floor(Math.random() * remainingChars)];
    finalPass += newChar;
    originalPass = originalPass.replace(newChar, '');
  }
  return finalPass;
}

// receives chosen password elements and creates characters per element
var generatePassword = function() {
  var passwordInfo = passwordElements();
  var password = "";
  var passwordLength = passwordInfo.len;

  if (passwordInfo.up) {
    password += getUppercase(passwordInfo.numChar);
    passwordLength -= passwordInfo.numChar;
  }
  if (passwordInfo.num) {
    password += getNumerical(passwordInfo.numChar);
    passwordLength -= passwordInfo.numChar;
  }
  if (passwordInfo.spec) {
    password += getSpecial(passwordInfo.numChar);
    passwordLength -= passwordInfo.numChar;
  }
  if (passwordInfo.low) {
    password += getLowercase(passwordLength);
  }
  // password sent to be randomized to strengthen further
  return randomize(password)
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
