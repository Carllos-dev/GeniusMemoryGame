let order = [];
let clickedOrder = [];
let score = 0;

/* 0 = verde; 1 = vermelho; 2 = amarelo; 3 = azul */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//Cria ordem aleatória de cores
let surffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // o " Math.random() * 4 sortei sempre de 0 a 3
    // o Math.floor arredonda o número que vai ser sorteado, pra ser inteiro
    order[order.length] = colorOrder; //o order recebe o número sorteado
    clickedOrder = [];

    //vamos usar o laço for para percorrer o array e executar os comandos para selecionar a cor
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor 
let lightColor = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        Element.classList.add('selected');
    }, Number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa se os botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

//criar função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }
    else if (color == 1){
        return red;
    }
    else if (color == 2){
        return yellow;
    }
    else if (color == 3){
        return blue;
    }
}

//função pra próximo nível do jogo
let nextLevel = () => {
    score++;
    surffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para reiniciar!`);
    order = [];
    clickedOrder = [];

    playGame();
}

//função novo jogo
let playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando novo jogo...')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();