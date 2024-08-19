const connectApiUrl = {};

connectApiUrl.getMoedas = (input, out) => {
    const url = `https://economia.awesomeapi.com.br/last/${input}-${out}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na resposta da API: ' + response.status);
            }
            return response.json();
        })
        .then((jsonBody) => {
            const key = `${input}${out}`.toUpperCase();
            return jsonBody[key];
        })
        .catch((error) => {
            console.error('Erro ao buscar dados da API:', error);
            return null;
        });
};
