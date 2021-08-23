const game = new Game();



function preload() {


    game.preLoadGame();
}

function setup() {

    createCanvas(700, 700);
    game.setupGame()
}



function draw() {
    game.drawGame()
}

function keyPressed() {


    if (keyCode === 32) {

        game.player.jump()
    }
}