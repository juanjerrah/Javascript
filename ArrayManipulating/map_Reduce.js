let values = [5, 3, 7, 10,8, 2, 9, 11, 20];

//Irá dobrar os valores do array 
let doubleValues = values.map((value) => {
    return value * 2;
});

//Irá somar todos os valores
let sumDoubleValues = doubleValues.reduce((index, value) => {
    return value + index
}, 0);

console.log(values);
console.log(doubleValues);
console.log(sumDoubleValues);