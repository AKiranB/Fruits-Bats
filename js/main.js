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
    if (keyIsDown(65)) {

        game.player.moveLeft()
    }
    if (keyIsDown(68)) {

        game.player.moveRight()
    }
}

function keyPressed() {


    if (keyCode === 32) {

        game.player.jump()
    }



}