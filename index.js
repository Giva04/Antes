// criando função teste
// function update () {
//     console.log('ok')
// }

        // LOGICA DA CALCULADORA

// FUNÇÃO QUE CAPTURA AS INFORMAÇÕES DE CADA COMPONTENTE E TRANSFORMA EM VARIAVEL

function update () {
    let bill = Number(document.getElementById('yourBill').value)
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
    console.log(billEach)

}

