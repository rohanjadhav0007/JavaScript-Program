function calculate(e) {
  e.preventDefault();

  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);

  let add = n1 + n2;
  let sub = n1 - n2;
  let mul = n1 * n2;
  let div =n1 / n2;

  document.getElementById("add").innerText = `Addition of ${n1} and ${n2} is: ${add}`;
  document.getElementById("sub").innerText = `Subtraction of ${n1} and ${n2} is: ${sub}`;
  document.getElementById("mul").innerText = `Multiplication of ${n1} and ${n2} is: ${mul}`;
  document.getElementById("div").innerText = `Division of ${n1} by ${n2} is: ${div}`;

  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("n1").focus();
}