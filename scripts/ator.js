//código do ator

let yAtor = 367;
let xAtor = 112;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }   

    if (keyIsDown(DOWN_ARROW)) {
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}

function verificaColisao(){
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        
        if(colisao){
            voltaAtorParaPosicaoInicial();
            somDaColisao.play();
            if(pontosMaiorQueZero()){
                meusPontos--;
            }
        }
    }    
}

function voltaAtorParaPosicaoInicial() {
    yAtor = 367;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(20);
    fill(color(255, 240, 0))
    text(meusPontos, width / 5, 25);
}

function marcaPonto() {
    if(yAtor <  15){
        meusPontos++;
        voltaAtorParaPosicaoInicial();
        somDoPonto.play();
    }
} 

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function podeSeMover() {
    return yAtor < 367;
}