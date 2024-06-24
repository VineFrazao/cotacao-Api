const buttonStart = document.getElementById('calculate');

buttonStart.addEventListener('click', () => {
    const inputCoin = document.getElementById('input').value;
    const outCoin = document.getElementById('outValue').value;
    const valueTyped = document.getElementById('value').value;

    const inputCoinValue = inputCoin.value;
    const outCoinValue = outCoin.value;

    connectApiUrl.getMoedas(outCoinValue, inputCoinValue).then((data) => {
        formatData(data, valueTyped);
    });
});

function formatData(searchResult, valueTyped) {

    const objectData = {
        value: searchResult.ask,
        time: searchResult.create_date,
        transform: searchResult.name
    };

    calculateAndDisplay(objectData, valueTyped);
}

function calculateAndDisplay(objectData, valueTyped) {
    const valueCalculate = valueTyped * objectData.value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Valor Digitado: ${valueTyped}</p>
        <p>Valor Calculado: ${valueCalculate.toFixed(2)}</p>
        <p>Horário: ${objectData.time}</p>
        <p>Operação: ${objectData.transform}</p>
    `;
}