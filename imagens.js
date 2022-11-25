// estrutura de imagens e sons

let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somColisao;
let somTrilha;
let somPonto;




function preload() {
    
    imagemEstrada  = loadImage("imagens/estrada.png");
    imagemAtor = loadImage("imagens/ator-1.png");
    imagemCarro1 = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
    
    somColisao = loadSound("som/colidiu.mp3");
    somTrilha = loadSound("som/trilha.mp3");
    somPonto = loadSound("som/pontos.wav");
    
}
