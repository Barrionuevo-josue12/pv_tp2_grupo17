
// Declarar el array
let nombres = ["Aldo", "Dante", "Romina", "Mateo", "Agustina", "Ricardo"];

// Inicializar variables para el nombre más largo
let nombreMasLargo = nombres[0];

// Recorrer el array y encontrar el nombre más largo
for (let i = 1; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i];
  }
}

// Mostrar el nombre más largo
console.log("El nombre más largo es:", nombreMasLargo);