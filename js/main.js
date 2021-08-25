const game = new Game();


let song;
let ambience;
function preload() {
    game.preLoadGame();
    song = loadSound('assets/sound/music.mp3')
    ambience = loadSound('assets/sound/ambience.mp3')

}



function setup() {

    createCanvas(700, 700);
    game.setupGame()

    song.play()
    ambience.play()

    let time = 120
    var GameTimer = setInterval(function () {
        if (time <= 0) {
            clearInterval(GameTimer);
        }
        time -= 1;
        if (time < 0) {
            song.stop()
            ambience.stop()
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


