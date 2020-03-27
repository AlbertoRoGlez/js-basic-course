var cantidad = Number(prompt("Introduce la cantidad de escalones"));

for (let i = 0; i < cantidad; i++) {
  let line = "";
  for (let e = 0; e <= i; e++) {
    line += "*";
  }
  console.log(line);
}
