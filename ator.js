//estrutura do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos =  0;

function mostraAtor() {

  image(imagemAtor, xAtor, yAtor, 30, 30);

}


function movimentaAtor() {
  
  if(keyIsDown(UP_ARROW)) {
    
    yAtor -= 3;
    
  }
  if(keyIsDown(DOWN_ARROW)) {
  
    if(limiteYAtor()) {
      yAtor += 3;
    }    
  }
}

function limiteYAtor() {
  return yAtor < 366
}

function voltaAtorInicio() {
  return yAtor = 366;
}

function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length;  i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      
      voltaAtorInicio();
      somColisao.play();
      if(conferePercaDePontos()){
        meusPontos -= 1;
      }     
    }
  }
}

function conferePercaDePontos(){
  return meusPontos > 0
}


function mostraPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width  / 5, 27);
}

function marcaPonto() {
  
  if(yAtor < 15){
    somPonto.play();
    meusPontos++;
    voltaAtorInicio()
    
  }
}

