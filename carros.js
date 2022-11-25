//estrutura dos carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5 , 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;



function mostraCarros() {
    
    for(let i = 0; i < imagemCarros.length; i = i + 1 ) {
    
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    
    }
}

function movimentaCarros(){

    for (let i = 0; i < imagemCarros.length; i++) {
    
        xCarros[i] -= velocidadeCarros[i];
    
    }
}


function voltaPosicaoInicial() {
    
    for(var i = 0; i < imagemCarros.length; i++) {
        
        if(verificaCarro(xCarros[i])){
            xCarros[i] = 600;
        } 
    }
}

function verificaCarro(xCarro) {
    
    return xCarro < -50
}