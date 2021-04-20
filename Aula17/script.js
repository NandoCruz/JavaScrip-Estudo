function contar() {
    var ini = window.document.getElementById("txtn1")
    var fim = window.document.getElementById("txtn2")
    var passo = window.document.getElementById("passo")
    var res = window.document.querySelector("div#res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO!] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando... <br>'

        var n1 = Number(ini.value)
        var n2 = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if (n1 < n2) {
            // Contagem Crescente
            for (var c = n1; c <= n2; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (var c = n1; c >= n2; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}