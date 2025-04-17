function mostrarSeleccion(valor) {
    const elemento = document.getElementById('seleccionado');
    elemento.textContent = `Juego seleccionado: ${valor}`;
    console.log(`Seleccionado: ${valor}`);
  }
  
  export { mostrarSeleccion };
  
  const radios = document.querySelectorAll('input[name="juego"]');
  
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      mostrarSeleccion(e.target.value);
    });
  });
  