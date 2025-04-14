
// Crear el array con al menos 8 edades distintas
let edades = [22, 30, 18, 45, 27, 34, 40, 29];

// calular promedio
let suma = 0;
edades.forEach(function(edad) {
  suma += edad;
});
let promedio = suma / edades.length;

// Mostrar resultado
console.log("El promedio de las edades es:", promedio);