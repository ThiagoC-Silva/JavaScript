var valores = [10, 5, 12, 2, 8, 9, 24, 4]

/*
    demonstranto sem a formatação padrão

    for(var c=0; c<valores.length; c++){
        console.log(`A posição ${c} tem o valor ${valores[c]}`)
    }
*/

//jeito mais simplificando de demonstrar o vetor
for( var pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//valores.indexOf() - busca a chave do valor em questão