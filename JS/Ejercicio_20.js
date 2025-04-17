// Países con sus capitales 
const paisesYCapitales = {
    argentina: "Buenos Aires",
    brasil: "Brasilia",
    peru: "Lima",
    chile: "Santiago",
    uruguay: "Montevideo",
    eua: "Washington D.C.",
    mexico: "Ciudad de México",
    colombia: "Bogotá",
    ecuador: "Quito",
    bolivia: "Sucre",
    venezuela: "Caracas"
};

const listaPaises = document.getElementById("listaPaises");
const listaCapitales = document.getElementById("listaCapitales");

// Evento change
listaPaises.addEventListener("change", () => {
    const paisSeleccionado = listaPaises.value;

    listaCapitales.innerHTML = '<option value="">Capital</option>';

    // Agregar la capital correspondiente a la lista de capitales
    if (paisesYCapitales[paisSeleccionado]) {
        const capital = paisesYCapitales[paisSeleccionado];
        const opcion = document.createElement("option");
        opcion.value = capital.toLowerCase();
        opcion.textContent = capital;
        opcion.selected = true; // Seleccionar automáticamente la capital
        listaCapitales.appendChild(opcion);

        console.log(`País seleccionado: ${paisSeleccionado}`);
        console.log(`Capital seleccionada: ${capital}`);
    }
});