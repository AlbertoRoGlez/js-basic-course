var x0 = Number(prompt("Inserte el valor de x0"));
var x1 = Number(prompt("Inserte el valor de x1"));
var fx0 = Math.pow(x0, 2) - 3 * x0 + 1;
var fx1 = Math.pow(x1, 2) - 3 * x1 + 1;
var x2 = x1 - (fx1 * (x0 - x1)) / (fx0 - fx1);
var fx2 = Math.pow(x2, 2) - 3 * x2 + 1;
var ea = Math.abs(((x2 - x1) / x2) * 100);
var i = 1;

console.log("Iteración " + i);
console.log("X0 = " + x0);
console.log("fX0 = " + fx0);
console.log("X1 = " + x1);
console.log("fX1 = " + fx1);
console.log("X2 = " + x2);
console.log("fX2 = " + fx2);
console.log("Ea = " + ea + "%");
console.log(
  `Calculo X2 = ${x1} - (${fx1} * (${x0} - ${x1})) / (${fx0} - ${fx1});`
);
console.log(`Calculo Ea = ((${x2} - ${x1}) / ${x2}) * 100;`);

for (i = 2; i < ea; i++) {
  x0 = x1;
  x1 = x2;
  fx0 = Math.pow(x0, 2) - 3 * x0 + 1;
  fx1 = Math.pow(x1, 2) - 3 * x1 + 1;
  x2 = x1 - (fx1 * (x0 - x1)) / (fx0 - fx1);
  fx2 = Math.pow(x2, 2) - 3 * x2 + 1;
  ea = Math.abs(((x2 - x1) / x2) * 100);
  console.log("Iteración " + i);
  console.log("X0 = " + x0);
  console.log("fX0 = " + fx0);
  console.log("X1 = " + x1);
  console.log("fX1 = " + fx1);
  console.log("X2 = " + x2);
  console.log("fX2 = " + fx2);
  console.log("Ea = " + ea + "%");
  console.log(
    `Calculo X2 = ${x1} - (${fx1} * (${x0} - ${x1})) / (${fx0} - ${fx1});`
  );
  console.log(`Calculo Ea = ((${x2} - ${x1}) / ${x2}) * 100;`);
}
