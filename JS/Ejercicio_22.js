function actualizarTexto(input, elementoDestino) {
    const texto = input.value;
    elementoDestino.textContent = texto;
  
    if (texto.length > 20) {
      elementoDestino.style.backgroundColor = "#ffcccc";
    } else {
      elementoDestino.style.backgroundColor = "transparent";
    }
  }
  
  
  export { actualizarTexto };
  
  const input = document.getElementById('entrada');
  const resultado = document.getElementById('resultado');
  
  input.addEventListener('input', () => {
    actualizarTexto(input, resultado);
  });
  