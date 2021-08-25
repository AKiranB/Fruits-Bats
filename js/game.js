class Game {

    constructor() {
        this.fruits = []
        this.bats = []
    }


    setupGame() {

        this.background = new Background();
        this.player = new Player();
        this.timer()

    }



    preLoadGame() {

        this.backgroundImg = [
            { src: loadImage('assets/background/Hills-Layer-01.png'), x: 0, speed: 0 },
            // { src: loadImage('../assets/background/sky.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/Hills-Layer-02.png'), x: 0, speed: 0.8 },
            { src: loadImage('assets/background/castle.png'), x: 5, speed: 0.8 },
            { src: loadImage('assets/background/Hills-Layer-03.png'), x: 0, speed: 1.7 },
            { src: loadImage('assets/background/Hills-Layer-04.png'), x: 0, speed: 3 },
            { src: loadImage('assets/background/Hills-Layer-06.png'), x: 0, speed: 5 },
            { src: loadImage('assets/background/Hills-Layer-05.png'), x: 0, speed: 4 }

        ]


        this.playerImgRun = loadImage('assets/character/running-girl-gif.gif')
        this.playerImgRunLeft = loadImage('assets/character/running-girl-gif-inverted.gif')
        this.playerImgJump = loadImage('assets/character/anime-girl-attack2.gif')
        this.playerSecondAttack = loadImage('assets/character/anime-girl-attack.gif')

        this.fruitsImg = [


            { src: loadImage('assets/fruits/fruit2.png') },
            { src: loadImage('assets/fruits/fruit3.png') },
            { src: loadImage('assets/fruits/fruit4.png') },
            { src: loadImage('assets/fruits/fruit5.png') },
            { src: loadImage('assets/fruits/fruit6.png') },

        ]

        // this.batImage = loadImage('assets/fruits/bat1.gif')



    }



    drawGame() {
        clear();
        this.background.draw()
        this.player.draw()
        // this.fruit.draw()
        // if (this.frameCount % 1000 === 0) {
        //     this.bats.push(new Bat())
        // }

        if (frameCount % 150 === 0 || frameCount % 375 === 0 || frameCount % 1000 === 0) {
            this.fruits.push(new Fruits(this.fruitsImg[Math.floor(Math.random() * 5)].src))

        }

        console.log(frameCount)
        this.fruits.forEach(fruit => {

            fruit.draw()

        })


        this.fruits = this.fruits.filter((fruit) => {

            if (fruit.collision(this.player) || fruit.x < 0) {

                return false

            } else {


                return true

            }

        })

    }


    score() {
        this.player.score += 10
        let score = document.querySelector('.score')
        score.innerText = "Score:" + " " + this.player.score

    }

    timer() {
        let timeleft = 120
        var GameTimer = setInterval(function () {


            if (timeleft <= 0) {
                clearInterval(GameTimer);
            }
            let timer = document.getElementById("timer")
            let time = 120
            timer.innerText = `Timer: 00: ${time - timeleft}`
            timeleft -= 1;
            if (timeleft < 60) {
                timer.innerText = `Timer: 01 :${time - timeleft - 61}`
            }
            console.log(timeleft)
        }, 1000);


    }

}