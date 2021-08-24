const game = new Game();



function preload() {


    game.preLoadGame();
}



function setup() {

    createCanvas(700, 700);
    game.setupGame()

    let time = 120
    var GameTimer = setInterval(function () {
        if (time <= 0) {
            clearInterval(GameTimer);
        }
        let setTime = 120
        time -= 1;
        if (time <= 0) {

            noLoop()
        }

    }, 1000);


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


