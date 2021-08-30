/**
 * Receba as notas dos alunos e calcule a media geral da turma
 */
let notas = [7.5, 6.2, 3, 4.5, 9.4, 8.3];

let somaNotas = notas.reduce((value, index)=>{
    return value + index;
},0);

let mediaGeral = somaNotas.toFixed(1) / notas.length;

console.log(mediaGeral.toFixed(2));