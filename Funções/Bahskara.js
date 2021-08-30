let Bahskara = (a,b,c) => {
    let delta = (b**2) - (4*a*c);
    x1 = -b + Math.sqrt(delta)/ (2*a);
    x2 = -b - Math.sqrt(delta)/ (2*a);

    if(delta < 0){
        console.log("Delta negativo, não possui raíz real");
        console.log(`delta = ${delta}`)
    }else{
        if(delta === 0){
            console.log("Possui raízes iguais");
            console.log(`delta = ${delta}`)
            console.log("x1 e x2 = ", x1.toFixed(2));
        }else{
            console.log("Possui duas raízes:");
            console.log(`delta = ${delta}`)
            console.log("x1 = ", x1.toFixed(2));
            console.log("x2 = ", x2.toFixed(2));
        };
    };
};

console.log(Bahskara(3,6,-5));