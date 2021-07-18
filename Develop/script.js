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
var generatePassword = function() {
  length = getPasswordLength();
  console.log(length);
}
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
