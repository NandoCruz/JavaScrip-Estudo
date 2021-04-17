function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
        // var hora = 19
    msg.innerHTML = `Agora são: ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        var dia = window.document.getElementById('titulo')
        dia.innerHTML = `Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#c98638'
    } else if (hora >= 12 && hora < 18) {
        var tarde = window.document.getElementById('titulo')
        tarde.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#bd5801'
    } else {
        var noite = window.document.getElementById('titulo')
        noite.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = '#8b2f01'
    }
}