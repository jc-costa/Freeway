//imagens e sons do jogo

//variáveis para carregar as imagens

let imagemDaEstrada;
let imagemDoCarro;
let imagemDoAtor;

//variáveis para carregar os sons

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    //carregando as imagens
    imagemDaEstrada = loadImage("imagens/estrada.png");    
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro1 = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];
    
    //carregando os sons
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.mp3");
}