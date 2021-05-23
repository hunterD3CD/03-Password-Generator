// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ------------------------CONDITION 1:  ESTABLISH VARIABLES-----------------------

// password variable
var Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var SpecialCharacter = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var Alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var UpperFunction = function (x) {
  return x.toUpperCase();
};
var AlphaUpper = Alpha.map(UpperFunction);

// user input variable
var PSlength;
var NumberConfirmed;
var LowercaseConfirmed;
var UppercaseConfirmed;
var SpecialCharacterConfirmed;

var PSoutput;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// --------------FUNCTION 1:  GENERATE PASSWORD------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // -------------CONDITION 1:  LENGTH CONFIRMATION & CRITERIA CONFIRMATION----------
  // ask user for password length
  PSlength = prompt("The length of the password? 8 to 128");
  if ((8 < PSlength) & (PSlength < 128)) {
    NumberConfirmed = confirm("will it include number?");
    LowercaseConfirmed = confirm("will it include lowercase?");
    UppercaseConfirmed = confirm("will it include uppercase?");
    SpecialCharacterConfirmed = confirm("will it include special character?");
  } else if (i < PSlength || PSlength > 128) {
    alert("Please enter between 8 and 128");
  } else {
    alert("Please enter a number");
  }

  // -------------CONDITION 2: NUMBER, CHARACTER, SPECIAL CHARACTER, AND CASES---------
  // 0 check
  if (
    NumberConfirmed === false &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = alert("you must chose one of the criteria");
  } else if (
    //4 check
    NumberConfirmed === true &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Number.concat(Alpha, AlphaUpper, SpecialCharacter);
    console.log(Number.concat(Alpha, AlphaUpper, SpecialCharacter));
  } else if (
    //3.1 check no special character
    NumberConfirmed === true &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Number.concat(Alpha, AlphaUpper);
    console.log(Number.concat(Alpha, AlphaUpper));
  } else if (
    //3.2 check no uppercase
    NumberConfirmed === true &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Number.concat(Alpha, SpecialCharacter);
    console.log(Number.concat(Alpha, SpecialCharacter));
  } else if (
    //3.3 check no lowercase
    NumberConfirmed === true &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Number.concat(AlphaUpper, SpecialCharacter);
    console.log(Number.concat(AlphaUpper, SpecialCharacter));
  } else if (
    //3.4 check no number
    NumberConfirmed === false &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Alpha.concat(AlphaUpper, SpecialCharacter);
    console.log(Alpha.concat(AlphaUpper, SpecialCharacter));
  } else if (
    //2.1 check uppercase & special character
    NumberConfirmed === false &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = AlphaUpper.concat(SpecialCharacter);
    console.log(AlphaUpper.concat(SpecialCharacter));
  } else if (
    //2.2 check lowercase & special character
    NumberConfirmed === false &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Alpha.concat(SpecialCharacter);
    console.log(Alpha.concat(SpecialCharacter));
  } else if (
    //2.3 check lowercase & uppercase
    NumberConfirmed === false &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Alpha.concat(AlphaUpper);
    console.log(Alpha.concat(AlphaUpper));
  } else if (
    //2.4 check number & uppercase
    NumberConfirmed === true &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Number.concat(AlphaUpper);
    console.log(Number.concat(AlphaUpper));
  } else if (
    //2.5 check number & special character
    NumberConfirmed === true &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = Number.concat(SpecialCharacter);
    console.log(Number.concat(SpecialCharacter));
  } else if (
    //2.6 check number & special character
    NumberConfirmed === true &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Number.concat(Alpha);
    console.log(Number.concat(Alpha));
  } else if (
    //1.1 check number
    NumberConfirmed === true &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Number;
    console.log(Number);
  } else if (
    //1.2 check lowercase
    NumberConfirmed === false &&
    LowercaseConfirmed === true &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = Alpha;
    console.log(Alpha);
  } else if (
    //1.3 check uppercase
    NumberConfirmed === false &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === true &&
    SpecialCharacterConfirmed === false
  ) {
    PSoutput = AlphaUpper;
    console.log(AlphaUpper);
  } else if (
    //1.4 check special character
    NumberConfirmed === false &&
    LowercaseConfirmed === false &&
    UppercaseConfirmed === false &&
    SpecialCharacterConfirmed === true
  ) {
    PSoutput = SpecialCharacter;
    console.log(SpecialCharacter);
  }

  // ---------------------ARRAY,LOOP & MATH: RANDOM SELECTION--------------------------
  for (i = 0; i < Length; i++) {
    var RandomOutput = Output[Math.floor(Math.random() * Output.length)];
  }
}
