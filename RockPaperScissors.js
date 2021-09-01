let rockPaperScissors = () => {
    let input = require('prompt-sync')();

    while(true){

        while(true){
            console.log('|Escolha dentre as opções abaixo| \n------------------ \n|Pedra| \n|Papel| \n|Tesoura| \n------------------');
            
            let player1 = input('Digite a sua opção: ').toLowerCase();
            console.log('\n---------------------')

            if(player1 === 'pedra' || player1 === 'papel' || player1 === 'tesoura') {
                break;
            }else{
                console.log('Digite uma opção válida');
                return;
            }
        }
        
        let random = Math.floor(Math.random() * 3);
        let player2 = '';

        switch (random) {
            case 0:
                player2 = 'pedra'
                break;
            case 1:
                player2 = 'papel'
                break;
            case 2:
                player2 = 'tesoura'
                break;
            default:
                break;
        }

        if(player1 === 'pedra') {
            if(player2 === 'pedra') {
                console.log(`Empatou!!! ${player1} empata com ${player2}`);
            }else if(player2 ==='papel'){
                console.log(`Perdeu!!! ${player1} perde para ${player2}`);
            }else{
                console.log(`Ganhou!!! ${player1} ganha para ${player2}`);
            }
        }else if(player1 === 'papel') {
            if(player2 === 'pedra') {
                console.log(`Ganhou!!! ${player1} ganha para ${player2}`);
            }else if(player2 ==='papel'){
                console.log(`Empatou!!! ${player1} empata com ${player2}`);
            }else{
                console.log(`Perdeu!!! ${player1} perde para ${player2}`);
            }
        }else{
            if(player2 === 'pedra') {
                console.log(`Perdeu!!! ${player1} perde para ${player2}`);
            }else if(player2 ==='papel'){
                console.log(`Ganhou!!! ${player1} ganha para ${player2}`);
            }else{
                console.log(`Empatou!!! ${player1} empata com ${player2}`);
            }
        }

        console.log('\n---------------------')        
        let opc = input('Deseja jogar novamente? [S/N]: ').toLowerCase();
        
        if (opc !== 's') {
            console.log('Saindo...')
            break;
        }
    }
}

console.log(rockPaperScissors());

