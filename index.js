function partOne() {
  for (let num = 1; num <= 100; num++) {
    let output = "";

    if (num % 3 === 0) {
      output += "Fizz";
    }
    if (num % 5 === 0) {
      output += "Buzz";
    }

    if (output === "") {
      output += num;
    }
    console.log(output);
  }
}

function partTwo() {
  for (let num = 1; num <= 300; num++) {
    let output = "";

    THREE = num % 3 === 0; // Fizz
    FIVE = num % 5 === 0; // Buzz
    SEVEN = num % 7 === 0; // Bang
    ELEVEN = num % 11 === 0; // Bong
    THIRTEEN = num % 13 === 0; // Fezz
    SEVENTEEN = num % 17 === 0; // reverse order

    if (ELEVEN) {
      output = THIRTEEN ? "BongFezz" : "Bong";
    } else if (SEVENTEEN) {
      output += SEVEN ? "Bang" : "";
      output += FIVE ? "Buzz" : "";
      output += THIRTEEN ? "Fezz" : "";
      output += THREE ? "Fizz" : "";
    } else {
      output += THREE ? "Fizz" : "";
      output += THIRTEEN ? "Fezz" : "";
      output += FIVE ? "Buzz" : "";
      output += SEVEN ? "Bang" : "";
    }
    output += output === "" ? num : "";

    console.log(output);
  }
}

function partThree() {
  const prompt = require("prompt-sync")({ sigint: true });
  const maxNum = prompt("Input upper limit: ");
  let FIZZ = prompt("Number for Fizz: ");
  let BUZZ = prompt("Number for Buzz: ");
  let FEZZ = prompt("Number for Fezz: ");
  for (let num = 1; num <= maxNum; num++) {
    let output = "";
    if (num % 11 === 0) {
      output = num % 13 === 0 ? "BongFezz" : "Bong";
    } else if (num % 17 === 0) {
      output += num % 7 === 0 ? "Bang" : "";
      output += num % BUZZ === 0 ? "Buzz" : "";
      output += num % FEZZ === 0 ? "Fezz" : "";
      output += num % FIZZ === 0 ? "Fizz" : "";
    } else {
      output += num % FIZZ === 0 ? "Fizz" : "";
      output += num % FEZZ === 0 ? "Fezz" : "";
      output += num % BUZZ === 0 ? "Buzz" : "";
      output += num % 7 === 0 ? "Bang" : "";
    }
    output += output === "" ? num : "";

    console.log(output);
  }
}

partThree();
