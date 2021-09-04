
let validarCpf = (cpf) => {
    let valor1 = 0;
    let valor2 = 0
    let resto = 0;
    let resto2 = 0;

    //Verifica se há caracteres especiais e remove
    let cpfVerif = cpf.replace('.', '').replace('.', '').replace('-', ''); 

    //Verifica se o cpf tem todos os digitos iguais
    const verifValores = [...new Set(cpfVerif)];
    if(verifValores.length === 1){
        return `Cpf Inválido! \nNúmeros não podem ser todos iguais`
    }

    //Gera o primeiro digito verificador
    for(let i = 1; i <= 9; i++){
        valor1 += parseInt(cpfVerif.substring(i-1, i) * (11 - i));
        resto = (valor1 * 10) % 11;
    }
    //Certifica o primeiro digito verificador
    if(resto === 10 || resto === 11){
        resto = 0;
    }else if(resto != parseInt(cpfVerif.substring(9, 10))){
        console.log(`Cpf ${cpf} inválido!`);
        return false;
    }
    //Gera segundo digito verificador
    for(let i = 1; i <= 10; i++){
        valor2 += parseInt(cpfVerif.substring(i-1, i) * (12 - i));
        resto2 = (valor2 * 10) % 11;
    }
    //Certifica segundo digito verificador
    if(resto2 === 10 || resto2 === 11){
        resto2 = 0;
    }else if(resto2 !== parseInt(cpfVerif.substring(10, 11))){
        console.log(`Cpf ${cpf} inválido!`);
        return false;
    }
    return `Cpf ${cpf} Válido!`
    
}

//Digite o cpf entre as aspas abaixo.
let Cpf = '102.801.729-40';
console.log(validarCpf(Cpf));