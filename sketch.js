function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
}

function draw() {
    background(imagemEstrada);
    mostraAtor();
    mostraCarros();
    movimentaCarros();
    movimentaAtor();
    voltaPosicaoInicial();
    verificaColisao();
    mostraPonto();
    marcaPonto();
}
