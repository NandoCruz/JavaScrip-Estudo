function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    /* se a da ta de nascimento é válido*/
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRRO!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            /* Se é Masculino ou feminino */
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemH.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'Menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}