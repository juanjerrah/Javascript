function gerarCpfValido() {
    let Cpf = [];
    let valor1 = 0;
    let valor2 = 0;
    let resto = 0;
    let resto2 = 0;
    
    for(let i = 0; i < 9; i++){
        Cpf.push(Math.floor(Math.random()*10));
    }

    //let valString = Cpf.toString();
    for(let i = 1; i <= 9; i++){
        valor1 += Cpf[i-1] * (11 - i);
        resto = (valor1 * 10) % 11;
    }

    if(resto === 10 || resto === 11){
        resto = 0
        Cpf.push(resto);
    }else{
        Cpf.push(resto); 
    }

    for(let i = 1; i <= 10; i++){
        valor2 += Cpf[i-1] * (12 - i);
        resto2 = (valor2 * 10) % 11;
    }

    if(resto2 === 10 || resto2 === 11){
        resto2 = 0;
        Cpf.push(resto2);
    }else{
        Cpf.push(resto2)
    }
    const strCpf = Cpf.toString();
    const cpf = strCpf.replace(/,/g , '');

    return `Cpf: ${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
}

console.log(gerarCpfValido());