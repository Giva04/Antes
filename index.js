// criando função teste
// function update () {
//     console.log('ok')
// }

        // LOGICA DA CALCULADORA

// FUNÇÃO PARA LIMITAR CASAS DECIMAIS

function formatMoney(value) {
    // math.ceil , arredonda o valor impar usando o ultimo valor (value * 100) /100
    value = Math.ceil(value * 100) /100
    value = value.toFixed(2);
    return 'R$ ' + value
}
// Função para mostras o n° de pessoas que dividirão a conta
function formatSplit(value) {
    if (value == 1) return value + ' Pessoa'
    return value + ' Pessoas'
}

// FUNÇÃO QUE CAPTURA AS INFORMAÇÕES DE CADA COMPONTENTE E TRANSFORMA EM VARIAVEL

function update () {
    let bill = Number(document.getElementById('yourBill') .value )
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    // console.log({bill, tipPercent, split})

    // CRIANDO E RETORNANDO OS CALCULOS MATEMATICOS
        // valor da GORJETA
    let tipValue = bill * (tipPercent / 100)
        // valor TOTAL
    let billTotal =  bill + tipValue
        // dividindo ca conta por pessoas
    let billEach = billTotal / split
    // console.log(billEach)

    // MOSTRANDO OS RESULTADOS NO HTML
        // porcetagem
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %' 
        // Gorjeta
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
        // Total da Conta
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
        // Split mostra a quantidade de pessoas
    document.getElementById('splitValue').innerHTML = formatSplit(split)
        //  Total por Pessoa
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}

