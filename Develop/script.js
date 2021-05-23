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
var Length;
var NumberConfirmed;
var LowercaseConfirmed;
var UppercaseConfirmed;
var SpecialCharacterConfirmed;

var Output;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

for (i = 0; i < 7; i++) {
  var number = Math.floor(Math.random() * 24);
  console.log(AlphaUpper[number]);
}

// -------------CONDITION 1:  LENGTH CONFIRMATION & CRITERIA CONFIRMATION----------
Length = prompt("The length of the password? 8 to 128");
if ((8 < Length) & (Length < 128)) {
  NumberConfirmed = confirm("will it include number?");
  LowercaseConfirmed = confirm("will it include lowercase?");
  UppercaseConfirmed = confirm("will it include uppercase?");
  SpecialCharacterConfirmed = confirm("will it include special character?");
} else if (i < Length || Length > 128) {
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
  Output = alert("you must chose one of the criteria");
} else if (
  //4 check
  NumberConfirmed === true &&
  LowercaseConfirmed === true &&
  UppercaseConfirmed === true &&
  SpecialCharacterConfirmed === true
) {
  Output = Number.concat(Alpha, AlphaUpper, SpecialCharacter);
  console.log(Number.concat(Alpha, AlphaUpper, SpecialCharacter));
} else if (
  //3 check
  NumberConfirmed === true &&
  LowercaseConfirmed === true &&
  UppercaseConfirmed === true &&
  SpecialCharacterConfirmed === false
) {
  console.log("no special cha");
} else if (
  NumberConfirmed === true &&
  LowercaseConfirmed === true &&
  UppercaseConfirmed === false &&
  SpecialCharacterConfirmed === true
) {
  console.log("no uppercase");
} else if (
  NumberConfirmed === true &&
  LowercaseConfirmed === false &&
  UppercaseConfirmed === true &&
  SpecialCharacterConfirmed === true
) {
  console.log("no lowercase");
} else if (
  NumberConfirmed === false &&
  LowercaseConfirmed === true &&
  UppercaseConfirmed === true &&
  SpecialCharacterConfirmed === true
) {
  console.log("no number");
}

// ---------------------ARRAY,LOOP & MATH: RANDOM SELECTION--------------------------
for (i = 0; i < Length; i++) {
  console.log();
}
