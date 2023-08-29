var generateBtn = document.querySelector("#generate");

// Add an event listener to the generate button to handle the click event
generateBtn.addEventListener("click", generatePassword);

// Define a function to generate a password
function generatePassword() {
  var length = Number(prompt("Enter a password length between 8 and 128"));
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
  
  // Get a reference to the password element where you will display the generated password
  var passwordField = document.getElementById("password");

  // Call the writePassword function to generate the password
  var password = writePassword(length, charType);

  // Display the generated password in the password element
  passwordField.textContent = password;
}

// Define a function to generate the actual password
function writePassword(length, charType) {
  var chars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  
  charType = charType.toLowerCase(); // Convert charType to lowercase
  
  // Validate charType and use lowercase characters by default if invalid input
  if (!(charType in chars)) {
    charType = 'lowercase';
  }
  
  var selectedChars = chars[charType];
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.charAt(randomIndex);
  }

  return password;
}





