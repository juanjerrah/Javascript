/**
 * Ler um array B de 10 elementos (considere que podem existir elementos repetidos).
 *  A seguir copie para um array C apenas os elementos de B que não se repetem. 
 * Após o término da cópia escrever o array C.
 */
let array = [1, 2,2,3,4,5,5,4,6,6,6,7,1, 1]

let arrayFilter = array.filter((value, index)=>{
    return (array.indexOf(value) !== index)?true:false;
})

let repetido = new Set(arrayFilter);

console.log(repetido);
