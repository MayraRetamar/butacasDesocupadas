let cantidadButacas: number = Number(prompt("Ingrese la cantidad de butacas"));
let butacas: boolean[] = new Array(cantidadButacas);

let butacasDesocupadas = 0;
for (let indice: number = 0; indice < cantidadButacas; indice++) {
  butacas[indice] = Boolean(
    prompt("La butaca " + (indice + 1) + " esta ocupada?? (vacio = no ")
  );
  if (butacas[indice] === false) {
    butacasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas es " + butacasDesocupadas);
