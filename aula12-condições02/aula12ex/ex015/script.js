function verificar() {
    var data = new Date()
    var anoA = data.getFullYear()
    var anoN = document.getElementById('ano')
    var res = document.getElementById('res')
    
    if (anoN.value.length == 0 || anoN > anoA){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('sex')
        var idade = anoA - Number(anoN.value)
        var gênero = ''
        var img = document.createElement('img')//criando uma tag img
        img.setAttribute('id', 'foto')//criando um id pra tag img
        if (sex[0].checked){//se masculinho foi marcado
            gênero = 'homem'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'images/bbmenino.png')

            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovemhomem.png')

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/homemadulto.png')

            }else{
                //idoso
                img.setAttribute('src', 'images/idoso.png')
            }
        }else{
            gênero = 'Mulher'
            if (idade < 10) {
                //criança
                img.setAttribute('src', 'images/bbmenina.png')

            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovemmulher.png')

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/mulheradulta.png')

            }else{
                //idoso
                img.setAttribute('src', 'images/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//colocar um conteúdo embaixo/adicionar um elemento
    }
}