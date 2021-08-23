class Game {

    constructor() {

    }


    setupGame() {

        this.background = new Background();
    }



    preLoadGame() {

        this.backgroundImg = [
            { src: loadImage('../assets/background/Hills-Layer-01.png'), x: 0, speed: 0 },
            { src: loadImage('../assets/background/Hills-Layer-02.png'), x: 0, speed: 0.7 },
            { src: loadImage('../assets/background/Hills-Layer-03.png'), x: 0, speed: 1.7 },
            { src: loadImage('../assets/background/Hills-Layer-04.png'), x: 0, speed: 3 },
            { src: loadImage('../assets/background/Hills-Layer-06.png'), x: 0, speed: 5 },
            { src: loadImage('../assets/background/Hills-Layer-05.png'), x: 0, speed: 4 }

        ]


        this.playerImg = loadImage('../assets/character/running-girl-gif.gif')


    }



    drawGame() {
        clear();
        this.background.draw()

    }

}