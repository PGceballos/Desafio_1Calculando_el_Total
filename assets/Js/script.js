// Get references to the relevant elements
const cantidadInput = document.querySelector('#cantidad');
const colorSelect = document.querySelector('#color');
const calcularButton = document.querySelector('#calcular');
const totalSpan = document.querySelector('#total');
const cantidadSeleccionadaSpan = document.querySelector('#cantidad-seleccionada');
const colorSeleccionadoSpan = document.querySelector('#color-seleccionado');

// Add an event listener to the calcularButton
calcularButton.addEventListener('click', () => {
  // Get the values from the inputs
  const cantidad = cantidadInput.value;
  const color = colorSelect.value;

  // Calculate the total
  const total = cantidad * 40000;

  // Update the result elements with the calculated values
  totalSpan.textContent = total;
  cantidadSeleccionadaSpan.textContent = cantidad;
  colorSeleccionadoSpan.textContent = color;
});
