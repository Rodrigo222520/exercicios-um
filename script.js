console.log("hello world");

let n1 = parseFloat(prompt('escreva n1'));
let n2 = parseFloat(prompt('escreva n2'));

function calcular (n1,n2) {

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    
    if(n2 === 0){
        console.log("não da para dividir por 0");
    }else{
        const divisao = n1 / n2;
        console.log(divisao);
    }
    
}

calcular(n1,n2);