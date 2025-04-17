 // Captura el botón y el párrafo
 const boton = document.getElementById('Boton');
 const parrafo = document.getElementById('Parrafo');

 // Evento clic que cambia el texto del párrafo
 boton.addEventListener('click', () => {
   parrafo.textContent = '¡CHAN!';
 });