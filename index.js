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

partTwo();
