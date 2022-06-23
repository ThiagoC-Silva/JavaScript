function GerarTabuada(){
    var n = document.querySelector('input#n')

    var tab = document.querySelector('select')

    var vez = 1

    //Converção para número
    var num = Number(n.value)
    //Contagem
    if(n.value.length== 0){
        alert('Por favor, digite um número!')
    }else{
        tab.innerHTML = ''
        for(num; vez<=10; vez++){
            let item = document.createElement('option')//criando options para poder adicionar elementos dentro do select
            item.text = `${num} x ${vez} = ${num*vez}`//parte de dentro do option  
            item.value = `tab ${vez}`//valor do item adicionado 
            tab.appendChild(item)//adiciona o elemento item no select
        }
       
    
    }
}