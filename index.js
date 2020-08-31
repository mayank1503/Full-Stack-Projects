// document.getElementById("temp").setAttribute("value", 10);
// const getTemp = () => {
//   let temp = document.getElementById("temp").value;
//   return temp;
// };

// const print = (result) => {
//   let resultText = `Memory in Gigabytes is ${result} GB`;
//   document.getElementById("result").innerHTML = resultText;
// };
// const convertToGB = () => {
//   let temp = getTemp();
//   if (temp === -1) return;

//   let result = (temp / 1024 ** 3).toFixed(2);

//   print(result);
// };

// const convert = () => {
//   let bit = document.getElementById("input1").value;
//   bit = parseFloat(bit);
//   let result = +(bit / 8).toFixed(3);
//   //console.log(result);
//   let byte = document.getElementById("input2");
//   byte.value = result;
// };

const convertMultiple = () => {
  let input = document.getElementById("input1").value;
  input = parseFloat(input);
  let type1 = document.getElementById("type1").value;
  let type2 = document.getElementById("type2").value;
  if (isNaN(input)) {
    alert("Enter the valid input");
    let inp1 = document.getElementById("input1");
    inp1.value = "";
  } else {
    let result = input;
    if (type1 === "Bit(b)") {
      if (type2 === "Byte(B)") result = +(input * 0.125);
      else if (type2 === "KiloByte(KB)") result = +(input * 0.000125);
      else if (type2 === "MegaByte(MB)") result = +(input * 0.000000125);
      else if (type2 === "GigaByte(GB)") result = +(input * 0.000000000125);
      else if (type2 === "TeraByte(TB)") result = +(input * 0.000000000000125);
    }
    if (type1 === "Byte(B)") {
      if (type2 === "Bit(b)") result = +(input * 8);
      else if (type2 === "KiloByte(KB)") result = +(input * 0.001);
      else if (type2 === "MegaByte(MB)") result = +(input * 0.000001);
      else if (type2 === "GigaByte(GB)") result = +(input * 0.000000001);
      else if (type2 === "TeraByte(TB)") result = +(input * 0.000000000001);
    }
    if (type1 === "KiloByte(KB)") {
      if (type2 === "Bit(b)") result = +(input * 8000);
      else if (type2 === "Byte(B)") result = +(input * 1000);
      else if (type2 === "MegaByte(MB)") result = +(input * 0.001);
      else if (type2 === "GigaByte(GB)") result = +(input * 0.000001);
      else if (type2 === "TeraByte(TB)") result = +(input * 0.000000001);
    }
    if (type1 === "MegaByte(MB)") {
      if (type2 === "Bit(b)") result = +(input * 8000000);
      else if (type2 === "Byte(B)") result = +(input * 1000000);
      else if (type2 === "KiloByte(KB)") result = +(input * 1000);
      else if (type2 === "GigaByte(GB)") result = +(input * 0.001);
      else if (type2 === "TeraByte(TB)") result = +(input * 0.000001);
    }
    if (type1 === "GigaByte(GB)") {
      if (type2 === "Bit(b)") result = +(input * 8000000000);
      else if (type2 === "Byte(B)") result = +(input * 1000000000);
      else if (type2 === "KiloByte(KB)") result = +(input * 100000);
      else if (type2 === "MegaByte(MB)") result = +(input * 1000);
      else if (type2 === "TeraByte(TB)") result = +(input * 0.001);
    }
    if (type1 === "TeraByte(TB)") {
      if (type2 === "Bit(b)") result = +(input * 8000000000000);
      else if (type2 === "Byte(B)") result = +(input * 1000000000000);
      else if (type2 === "KiloByte(KB)") result = +(input * 1000000000);
      else if (type2 === "MegaByte(MB)") result = +(input * 1000000);
      else if (type2 === "GigaByte(GB)") result = +(input * 1000);
    }
    let input2 = document.getElementById("input2");
    input2.value = result;
  }
};

const emptyInput = () => {
  let inp1 = document.getElementById("input1");
  inp1.value = "";
  let inp2 = document.getElementById("input2");
  inp2.value = "";
};

const swap = () => {
  let typ1 = document.getElementById("type2").value;
  document.getElementById("type2").value = document.getElementById(
    "type1"
  ).value;
  document.getElementById("type1").value = typ1;
  let inp1 = document.getElementById("input1");
  inp1.value = "";
  let inp2 = document.getElementById("input2");
  inp2.value = "";
};

// var tmp = document.getElementById("c").value;
// document.getElementById("c").value = document.getElementById("d").value;
// document.getElementById("d").value = tmp;
