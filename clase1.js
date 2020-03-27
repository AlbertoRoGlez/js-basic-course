// ? Tipos de datos

let a = 1; // * number
let b = "String"; // * String
let c = false; // * Boolean
let d = []; // * Array <- Object
let e = {}; // * Json <- Object
let f = class popo {}; // * Clase <- Object
// let FenElChat = new f();

// console.log(`a = ${typeof a}`);
// console.log(`b = ${typeof b}`);
// console.log(`c = ${typeof c}`);
// console.log(`d = ${typeof d}`);
// console.log(`e = ${typeof e}`);
// console.log(`f = ${typeof f}`);

// ? Array
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(arrayNumber);
// console.log(typeof arrayNumber);
// console.log(arrayNumber.length);
// console.log(arrayNumber[arrayNumber.length - 1]);

let mensaje = "Hola mundo";
// console.log(mensaje.split(" "));
// console.log(mensaje.replace(" ", "&"));

let prueba =
  "Voluptate occaecat elit commodo fugiat quis ex fugiat. Aliqua elit sint elit qui et sint elit consequat Lorem dolore enim. Aliquip enim in dolor anim non. Deserunt non ullamco excepteur est aliqua commodo magna occaecat sit. Nostrud nostrud et irure voluptate dolor consequat incididunt Lorem anim in commodo magna adipisicing.";

// console.log(
//   prueba
//     .split(" ")
//     .join("\n")
//     .replace("o", "*")
// );

let prueba2 = prueba.split(" ").join("\n");

// ? Condicionales
let numero = 3;

if (numero > 8) {
  console.log("Aprobado con honores");
} else {
  if (numero > 5) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }
}
numero > 8
  ? console.log("Aprobado con honores")
  : numero > 5
  ? console.log("Aprobado")
  : console.log("Reprobado");

// ? Ciclos
let i = 0;
while (i > 0) {
  console.log("while" + i);
  i++;
}
i = 0;
do {
  console.log("do While" + i);
} while (i > 0);

for (let i = 0; i < arrayNumber.length; i++) {
  //   console.log(arrayNumber[i]);
}

console.log(arrayNumber);

for (const index in arrayNumber) {
  console.log(index);
}

for (const value of arrayNumber) {
  console.log(value);
}

// * Modernos
let handleMapArray = item => {
  console.log(item);
};

console.log(arrayNumber.forEach(handleMapArray));
console.log(arrayNumber.map(item => (item > 5 ? item : null)));
console.log(arrayNumber.filter(item => item > 5));
