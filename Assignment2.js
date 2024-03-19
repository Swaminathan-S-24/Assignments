let plus = document.getElementById("button1");
plus.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  console.log();
  //to avoid continues symbols
  if (isNaN(input.value[input.value.length - 1] / 2)) {
    return;
  }
  input.value += "+";
});

let minus = document.getElementById("button2");
minus.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  //to avoid continues symbols
  if (isNaN(input.value[input.value.length - 1] / 2)) {
    return;
  }
  input.value += "-";
});

let division = document.getElementById("button4");
division.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  console.log();
  //to avoid continues symbols
  if (isNaN(input.value[input.value.length - 1] / 2)) {
    return;
  }
  input.value += "/";
});

let subraction = document.getElementById("button5");
subraction.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  console.log();
  //to avoid continues symbols
  if (isNaN(input.value[input.value.length - 1] / 2)) {
    return;
  }
  input.value += "*";
});

let reset = document.getElementById("button6");
reset.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  input.value = "";
});

let clear = document.getElementById("button7");
clear.addEventListener("click", (e) => {
  var input = document.getElementById("input");
  console.log();
  //to avoid continues symbols
  input.value = input.value.substring(0, input.value.length - 1);
});
let a;
let operator;
let equal = document.getElementById("button3");
equal.addEventListener("click", (e) => {
  var input = document.getElementById("input").value; //input value
  let output = document.getElementById("output"); //o/p
  var val = 0; // val
  var curNum = ""; //
  let curSym = "+";
  let a = 0;
  let flag = true;
  // for (let i = 0; i < input.length; i++) {
  //   if (!isNaN(parseInt(input[i]))) {
  //     curNum += input[i];
  //   } else if (input[i] == "+") {
  //     val += parseInt(curNum);
  //     curNum = "";
  //   } else if (input[i] == "-") {
  //     val -= parseInt(curNum);
  //     curNum = "";
  //   } else if (input[i] == "/") {
  //     val = val / parseInt(curNum);
  //     curNum = "";
  //   } else if (input[i] == "*") {
  //     val = val * parseInt(curNum);
  //     curNum = "";
  //   } else if (input[i] == "=") {
  //     val += parseInt(curNum);
  //   } else {
  //     continue;
  //   }
  //   console.log(val, "in");
  // }

  for (let i = 0; i < input.length; i++) {
    a += 1;
    if (!isNaN(parseInt(input[i]))) {
      curNum += input[i].toString();
      if (a == input.length) {
        console.log(input[i], "kjhg");
        // val += parseInt(curNum);
        if (curSym == "+") {
          val += parseInt(curNum);
          // curNum = "";
          // curSym = input[i].toString();
        } else if (curSym == "-") {
          val -= parseInt(curNum);
          // curNum = "";
          // curSym = input[i].toString();
        } else if (curSym == "*") {
          val = val * parseInt(curNum);
          // curNum = "";
          // curSym = input[i].toString();
        } else if (curSym == "/") {
          val = val / parseInt(curNum);
          // curNum = "";
          // curSym = input[i].toString();
        }
      }
    } else if (
      input[i] == "+" ||
      input[i] == "-" ||
      input[i] == "/" ||
      input[i] == "*"
    ) {
      if (flag) {
        // val += parseInt(curNum);
        curSym = input[i];
        flag = false;
      } else {
        curSym = input[i];
      }
      console.log(input[i], curSym);
      if (curSym == "+") {
        val += parseInt(curNum);
        curNum = "";
        curSym = input[i].toString();
      } else if (curSym == "-") {
        val -= parseInt(curNum);
        curNum = "";
        curSym = input[i].toString();
      } else if (curSym == "*") {
        val = val * parseInt(curNum);
        curNum = "";
        curSym = input[i].toString();
      } else if (curSym == "/") {
        val = val / parseInt(curNum);
        curNum = "";
        curSym = input[i].toString();
      }
    } else {
      continue;
    }
    // output.value = input;
    output.value = val;
  }
});
