const buttonStart = document.getElementById('calculate');

buttonStart.addEventListener('click', () => {
    const inputCoin = document.getElementById('input').value;
    const outCoin = document.getElementById('outValue').value;
    const valueTyped = document.getElementById('value').value;

    if (inputCoin && outCoin && valueTyped) {
        connectApiUrl.getMoedas(inputCoin, outCoin).then((data) => {
            if (data) {
                formatData(data, valueTyped);
            } else {
                console.error('Erro: Dados não retornados pela API.');
            }
        }).catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
        });
    } else {
        console.error('Erro: Preencha todos os campos corretamente.');
    }
});

function formatData(searchResult, valueTyped) {
    if (searchResult.ask && searchResult.create_date && searchResult.name) {
        const objectData = {
            value: searchResult.ask,
            time: searchResult.create_date,
            transform: searchResult.name
        };

        calculateAndDisplay(objectData, valueTyped);
    } else {
        console.error('Erro: Dados incompletos na resposta da API.', searchResult);
    }
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