function contar(){
    let ini = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pass = document.querySelector('input#pass')
    let res = document.querySelector('div#resp')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        alert('[ERROR] Falta dados!')
        res.innerHTML = '<p>Impossível contar \u{1F614}</p>'
    }else{
        res.innerHTML = '<p style="margin:0px;">Contando: </p>'

        //Converter pra número SEMPRE
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if(p<=0){
            alert('Valor do "Passo" inválido! Considerando PASSO = 1 ')
            p = 1
        }

        //contangem
        //Crescente:
        if(i < f){
            for(var c=i; c<=f; c += p)
            res.innerHTML += `<p style="display:inline-block; margin:0px;">${c} \u{1F3C3}</p> `
        //Decrescente
        }else{
            for(var c=i; c>=f; c -= p)
            res.innerHTML += `<p style="display:inline-block; margin:0px;">${c} \u{1F3C3}</p> `
        }
    res.innerHTML += '\u{1F3C1}'
    }
   
    
}