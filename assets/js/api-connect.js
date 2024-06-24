const connectApiUrl = {};

connectApiUrl.getMoedas = (out = "USD", input = "BRL") => {
    const url = `https://economia.awesomeapi.com.br/last/${input}-${out}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody[`${input}${out}`])
        .catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
        });
};