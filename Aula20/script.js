let num = window.document.querySelector('input#txtnum')
let res = window.document.querySelector('div#res')
let lista = window.document.querySelector('select#lista')
let valor = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inLista(num.value, valor)) {
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valor.length == 0) {
        alert('Adicionar valores antes de finalizar!')
    } else {
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = valor[0]
        letmedia = valor[0]
        for (let pos in valor) {
            soma += valor[pos]
            if (valor[pos] > maior) {
                maior = valor[pos]
            } else
            if (valor[pos] < menor) {
                menor = valor[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo tem <strong>${tot}</strong> Elementos cadastrados </p>`
        res.innerHTML += `<p>O valor maior informado <strong>${maior}</strong> </p>`
        res.innerHTML += `<p> O valor menor informado <strong>${menor}</strong> </p>`
        res.innerHTML += `<p> Somando todos os valores temos <strong>${soma}</strong> </p>`
        res.innerHTML += `<p> A média de todos os valores digitados é ${media} </p>`
    }

}