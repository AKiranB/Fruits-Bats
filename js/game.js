class Game {

    constructor() {
        this.fruits = []
    }


    setupGame() {

        this.background = new Background();
        this.player = new Player();
        // this.fruit = new Fruits();
    }



    preLoadGame() {

        this.backgroundImg = [
            // { src: loadImage('../assets/background/Hills-Layer-01.png'), x: 0, speed: 0 },
            { src: loadImage('../assets/background/sky.png'), x: 0, speed: 0 },
            { src: loadImage('../assets/background/Hills-Layer-02.png'), x: 0, speed: 0.8 },
            { src: loadImage('../assets/background/castle.png'), x: 5, speed: 0.8 },
            { src: loadImage('../assets/background/Hills-Layer-03.png'), x: 0, speed: 1.7 },
            { src: loadImage('../assets/background/Hills-Layer-04.png'), x: 0, speed: 3 },
            { src: loadImage('../assets/background/Hills-Layer-06.png'), x: 0, speed: 5 },
            { src: loadImage('../assets/background/Hills-Layer-05.png'), x: 0, speed: 4 }

        ]


        this.playerImgRun = loadImage('../assets/character/running-girl-gif.gif')
        this.playerImgIdle = loadImage('../assets/character/anime-girl-attack2.gif')

        this.fruitsImg = [


            { src: loadImage('../assets/character/fruit2.png') },
            { src: loadImage('../assets/character/fruit3.png') },
            { src: loadImage('../assets/character/fruit4.png') },
        ]


    }



    drawGame() {
        clear();
        this.background.draw()
        this.player.draw()
        // this.fruit.draw()


        if (frameCount % 150 === 0) {
            this.fruits.push(new Fruits(this.fruitsImg[Math.floor(Math.random() * 3)].src))

        }

        this.fruits.forEach(fruit => {

            fruit.draw()

        })




    }

}