document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar valores dos inputs
    const area = parseFloat(document.getElementById('area').value);
    const numDoors = parseInt(document.getElementById('numDoors').value);
    const numWindows = parseInt(document.getElementById('numWindows').value);

    // Cálculo simples (ajustar conforme necessário)
    const totalQuantitative = area - (numDoors * 2) - (numWindows * 1.5);

    // Mostrar o resultado
    document.getElementById('result').innerHTML = `
        <h3>Resultado:</h3>
        <p>Área Total: ${area} m²</p>
        <p>Número de Portas: ${numDoors}</p>
        <p>Número de Janelas: ${numWindows}</p>
        <p>Quantitativo Total: ${totalQuantitative.toFixed(2)} m²</p>
    `;
});
