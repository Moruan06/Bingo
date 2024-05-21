var nome = prompt("Qual o nome Jogador?")

function mostrarNome(nome) {
    const nomeCartelaId = document.getElementById('nome-cartela')
    const titulo = document.createElement('h3')
    titulo.textContent = (nome)
    nomeCartelaId.appendChild(titulo)
}

function criarCartela() {
    var cartelaNumero = []
    const coluna = [[1,15], [16,30], [31,45], [46,60], [61,75]]

    for(var i = 0; i < 5; i++){
        cartelaNumero[i] = []
        for(var j = 0; j < 5; j++){
            let numeros
            do {
                numeros = Math.floor(Math.random() * (coluna[j][1] - coluna[j][0] + 1)) + coluna[j][0];
              } while (cartelaNumero.some(row => row.includes(numeros)));
              cartelaNumero[i][j] = numeros;
        }
    }

    cartelaNumero[2][2] = 'X'
    return cartelaNumero
}

function mostrarCartela(cartelaNumero) {
    const cartelaBingoId = document.getElementById('cartela-bingo')
    const cartela = document.createElement('table')
    
    const header = document.createElement('tr')
    const letras = ['B', 'I', 'N', 'G', 'O']
    for (let i = 0; i < letras.length; i++) {
        const th = document.createElement('th')
        th.textContent = letras[i]
        header.appendChild(th)
    }
    cartela.appendChild(header)

    for(var i = 0; i < 5; i++){
        const linha = document.createElement('tr')
        for(var j = 0; j < 5; j++){
            const nmr = document.createElement('td')
            nmr.textContent = cartelaNumero[i][j]
            linha.appendChild(nmr)
        }
        cartela.appendChild(linha)
    }
    cartelaBingoId.appendChild(cartela)
}

const cartelaNumero = criarCartela();

mostrarCartela(cartelaNumero)
mostrarNome(nome)