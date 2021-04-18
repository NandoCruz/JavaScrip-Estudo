var btn01 = window.document.getElementById('btn1')
var btn02 = window.document.getElementById('btn2')
var btn03 = window.document.getElementById('btn3')
var res = window.document.getElementById('txtnd')
var n1 = Number(btn01.value)
var n2 = Number(btn02.value)
var n3 = Number(btn03)


function somar() {
    var btn01 = window.document.getElementById('btn1')
    var btn02 = window.document.getElementById('btn2')
    var btn03 = window.document.getElementById('btn3')
    var res = window.document.getElementById('txtnd')
    var n1 = Number(btn01.value)
    var n2 = Number(btn02.value)
    var n3 = Number(btn03)

    var s = n1 + n2
}
res.innerHTML = `${s}`