// Lista de colores 
const colores = ['#ff9999', '#99ccff', '#ccffcc', '#f0e68c', '#dda0dd', '#ffb347', '#b0e0e6'];

// Función para obtener un color aleatorio
function colorAleatorio() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

// Función para cambiar el fondo
function cambiarFondo() {
  const color = colorAleatorio();
  document.body.style.backgroundColor = color;
  console.log(`Color de fondo cambiado a: ${color}`);
}

export { cambiarFondo };

const boton = document.getElementById('cambiarColor');
boton.addEventListener('click', cambiarFondo);
