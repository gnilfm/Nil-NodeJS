const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

console.log('Esse programa vaiverificar se voce e maior de 18 anos e tem habilitação para seber so entrar no kard');
console.log('Alem da suas verificações, precisamos verificar se voce esta na lista de presença do horario');

readline.question('Qual o seu ano de nascimento?' , ano => {
    if(ano > 2004){
        console.log('Voce não tem 18 anos');
    }else{
        readline.question('Voce tem habilitação? (sim/não) ' , temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "sim")){
                console.log('Voce não tem habilitação para o Kart');
            }else{
                readline.question("Qual seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas')
                            break;
                        case 'Rafael' :
                            console.log("Bem vindo ao Kart Rafael")
                            break;
                        default :
                            console.log('Seu nome não foi identificado na lista de presença')       
                    }
                })
            }
        })
    }
})