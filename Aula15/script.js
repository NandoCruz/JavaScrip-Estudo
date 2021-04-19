function ok() {
    var txtn1 = window.document.getElementById('txtnum')
    var n1 = Number(txtn1.value)
        //alert(`o numero é ${n1}`)
    var res = window.document.getElementById('res')
    var c = 1
    while (c <= 10) {
        var n = 3 * c
        res.innerHTML = `${txtn1} x ${c} = ${n}`
        c++
    }


}