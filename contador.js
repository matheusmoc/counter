function contar(){
    let inic = document.getElementById('txti')
    let pass = document.getElementById('txtp') 
    let fim  = document.getElementById('txtf')
    let cal = document.getElementById('cal')
    //length mostra a quantidade de elementos na memória, no caso quando não declaramos nada no input ele vai reconhecer como 0
    if (inic.value.length == 0 || pass.value.length == 0 || fim.value.length == 0){
        window.alert ('ERRO: Nenhum número pode ser igual ou abaixo de 0')
        cal.innerHTML = ('Impossível contar.')
    }else{

       cal.innerHTML = "contando... <br>"
       let i = Number(inic.value)
       let p = Number(pass.value)
       let f = Number(fim.value)
       if (p <= 0 ){
            window.alert ("Passe inválido, foi considerado o PASSE igual a 1")
            p = 1
       } 
       if (i < f){
           //contagem crescente somando o passe na entrada dos dados
           for(let c = i; c <= f; c += p ){
               cal.innerHTML += `${c} \u{1F449}`
       }
       
    }else{
        //contagem regressiva
        for(let c=i; c >= f; c -= p ){
              // a atribuição "+=" é a mesma coisa de c = c + 1 ou seja c + p (progressivo) e c=- é c = c - 1 ou seja c - p
              cal.innerHTML += `${c} \u{1F449}`
            } 
        }
        cal.innerHTML +=`${c} \u{1F449}`
    }
}