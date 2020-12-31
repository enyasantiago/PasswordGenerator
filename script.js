// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //when button to generate password is clicked
  //a series of prompts for password criteria are presented
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
}


//*********************** function here ***************************
//write a function called generatePassword which will have a series of prompts
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword(charLength) {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // we have to ask the user for how many characters they want in the password
  // we have to make sure it is between 8 and 128
  // otherwise, tell the user to fix input
  
  if (charLength === undefined) {
    charLength = parseInt(
      prompt("How many characters do you want your password to have?")
      );

      // while character length is less than 8, more than 128, or not a number, prompt user to enter valid numbers
      // while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    //   charLength = parseInt(prompt("Please enter a value between 8 and 128."));
    // }
    while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
      alert("Please choose a number between 8 and 128.");
      return generatePassword();
    }
  }
  
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // confirm if they want lowercase
  var includeLowercase = confirm("Do you want lower case characters?");
  // confirm if the want uppercase
  var includeUppercase = confirm("Do you want upper case characters?");
  // confirm if they want numeric
  var includeNumbers = confirm("Do you want numbers?");
  // confirm if they want special characters
  var includeSpecialChar = confirm("Do you want special characters?");

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // we need to show an error if user doesn't choose any characters

  // if (
    //   includeLowercase === false &&
  //   includeUppercase === false &&
  //   includeNumbers === false &&
  //   includeSpecialChar === false
  // ) {
    // if (
      //   !includeLowercase &&
  //   !includeUppercase &&
  //   !includeNumbers &&
  //   !includeSpecialChar
  // ) {
  if (
    !(
      includeLowercase ||
      includeUppercase ||
      includeNumbers ||
      includeSpecialChar
      )
      ) {
    alert("At least one character type has to be selected.");
    ///call generatePassword function again to confirm at least one character submission bypassing prompt for character length
    return generatePassword(charLength);
  }
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // from all the characters chose, choose one randomly and add it to the password x number of times
  
  var password = "";
  var possible = "";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=[]";

  if(includeUppercase) possible += upperLetters
  if(includeLowercase) possible += lowerLetters
  if(includeNumbers) possible += numbers
  if(includeSpecialChar) possible += symbols
//function gets random characters based on user input for number of characters and character types
  for (var i= 0; i < charLength; i++){
    password += getRandomFromString(possible)
  }
  
  //*****************function ends here*********************
  return password;
}
//function gets one random character from string of possible characters based on user defined included characters
function getRandomFromString(str){
  var index = Math.floor(Math.random() * str.length)
  return str[index]
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
