//Declarar controles básicos / variáveis importantes para o funcionamento 
let n = document.querySelector('input#num')
let list = document.querySelector('select')
let res = document.querySelector('div#res')
//criando o vetor
let valores = []
//------------------//-------------------//

//Funções de chamada

//VERIFICAR SE É UM NÚMERO VÁLIDO
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}
//CHECAR SE O NUM JÁ ESTÁ NA LISTA
function inLista(n, l){
    //-1 para vetor significa que o valor não foi econtrado 
    //l.indexOf(Number(n)) == valor n dentro da lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

//------------------//-------------------//
//função - adicionar valores
function AdicionarValor(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {

        //adicionar número a lista
        valores.push(Number(num.value))

        //visualização no select
        //1. criando variável para receber o elemento option
        let item = document.createElement('option')
        //2. adicionando o value para garantir a seleção
        
        //3. texto dentro do option
        item.text = `Valor ${num.value} adicionado.`
        //4. adicionando ao select
        list.appendChild(item)

        //limpando a tela de análise
        res.innerHTML = ''

    }else{
    alert('Valor inválido ou já encontrado na lista.')
    }
     
    //automatizando o input number
    num.value = ''//zerar o campo
    num.focus()//colocar o foco no cursor
}  

//------------------//-------------------//
//função - analisar
function MostrarAnálise(){
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }else{

        let tot_ele = valores.length //total de elemento de valores[]
        let maior = valores[0]
        let menor = valores[0]
        let som = 0
        let med = 0 

        //menor e maior número
        for(var pos in valores){

            som += valores[pos]//soma de todos os valores

            if(valores[pos]>maior) {
                maior = valores[pos]
            }
            if(valores[pos]<menor){
                menor = valores[pos]
            }
            med = som/valores.length//média geral
        }
        
        res.innerHTML = `<p>Ao todo temos ${tot_ele} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${som}.</p>` 
        res.innerHTML += `<p>A média dos valores digitados é ${med}.</p>` 
       
    }
}

    