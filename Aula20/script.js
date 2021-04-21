function adiciona() {
    var txtnum1 = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    var n = Number(txtnum1.value)
    if (n == '' || n > 100) {
        alert('Valor inválido ou já adicionado na lista.')
    } else {
        res.innerHTML = `Valor ${n} Adicionado`
    }
}

function finaliza() {
    var txtnum1 = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    var n = Number(txtnum1.value)
    if (n == '' || n > 100) { //alterar a condição para o vetor
        alert('Valor inválido ou já adicionado na lista.')
    } else {
        res.innerHTML = `Ao todo tem ${}`
    }
}