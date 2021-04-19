function contar() {
    var txn1 = window.document.getElementById("txtn1")
    var txn2 = window.document.getElementById("txtn2")
    var passe = window.document.getElementById("passe")
    var res = window.document.querySelector("div#res")
    var n1 = Number(txn1.value)
    var n2 = Number(txn2.value)
    var c = Number(passe.value)
        // alert(`${n1}, ${n2} e ${c}`)
    if (txtn1.value == 0 || txtn2.value == 0) {
        alert(`[ERRO!] Digite um número.`)
    }
    while (n1 <= n2) {
        alert(`${c}`)
        c++
    }

}