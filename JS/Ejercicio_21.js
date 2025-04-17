// Seleccionamos el input y el div donde vamos a mostrar el texto
const entrada = document.getElementById('entradaEjercicio21');
const resultado = document.querySelector('.resultadoEjercicio21');

// Escuchamos el evento "input"
entrada.addEventListener('input', () => {
  const texto = entrada.value;
  // Actualizamos el contenido en pantalla
  resultado.textContent = texto;
});
