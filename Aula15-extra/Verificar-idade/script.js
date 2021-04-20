function verificar() {
    var txtnome = window.document.getElementById('txtnome')
    var nome = (txtnome.value)
    var txtdata = window.document.getElementById('data')
    var dataNasc = (txtdata.value)
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')
    img.setAttribute('img', 'foto')


    //var data = new Data()
    //var ano = data.getFullYear()

    //var fano = ano - (dataNasc.value)

    //alert(`Tudo certo até aqui, ${nome}!`)
    res.style.textAlign = 'center'
    img.style.margin = '20px'
    res.innerHTML = `Seu nome é ${nome} você nasceu no dia ${dataNasc}`
    img.setAttribute('src', 'fernando.png')
    res.appendChild(img)
}