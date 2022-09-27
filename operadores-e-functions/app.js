const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {    
   const resultado = Number.parseFloat(numero); 
   if(!resultado){   
        console.log('Número informado não é valido');
    }  
    return resultado
}  

const validarOperador = (operadror) => {
    switch(operadror){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operadror;
        default:
            console.log('Operador informado invalido');
            return null;   
    }
}

readline.question('Favor informar um número:', (numero1)=> {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1){       
       readline.question('Favor informar outro número:' , (numrero2) => {
            const numeroValidado2 = validarNumeroInformado(numrero2);
       
            if(numeroValidado2){
                readline.question('Favor informar operador:' , (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`Operador selecionado adição resultado: ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-' : console.log(`Operador selecionado subtrção resultado: ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*' : console.log(`Operador selecionado Multiplicação resultado: ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/' : console.log(`Operador selecionado divisão resultado: ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%' : console.log(`Operador selecionado modulo resultado: ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                });
            }
       });
    }
})    
