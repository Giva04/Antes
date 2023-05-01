// criando função teste
// function update () {
//     console.log('ok')
// }
// FUNÇÃO QUE FARÁ O CALCULO PEGANDO INFORMAÇÃO DE CADA COMPONTENTE
// LOGICA DA CALCULADORA

function update () {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    console.log({bill, tipPercent, split})
}