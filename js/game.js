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
        //background imgs
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
        //player imgs

        this.playerImgRun = loadImage('assets/character/running-girl-gif.gif')
        this.playerImgJump = loadImage('assets/character/anime-girl-attack2.gif')
        this.playerSecondAttack = loadImage('assets/character/anime-girl-attack.gif')

        //fruit imgs
        this.fruitsImg = [

            { src: loadImage('assets/fruits/fruit2.png') },
            { src: loadImage('assets/fruits/fruit3.png') },
            { src: loadImage('assets/fruits/fruit4.png') },
            { src: loadImage('assets/fruits/fruit5.png') },
            { src: loadImage('assets/fruits/fruit6.png') },

        ]

        //bat img
        this.batImage = loadImage('assets/fruits/bat1.gif')

    }

    drawGame() {
        clear();
        this.background.draw()
        this.player.draw()

        //spawning the bats and fruit
        if (frameCount % 150 === 0 || frameCount % 375 === 0 || frameCount % 1000 === 0) {
            this.fruits.push(new Fruits(this.fruitsImg[Math.floor(Math.random() * 5)].src))

        }
        if (frameCount % 500 === 0) {
            this.bats.push(new Bat())
        }

        // console.log(frameCount)

        //drawing each bat and fruit
        this.bats.forEach(bat => {

            bat.draw()
        })
        this.fruits.forEach(fruit => {

            fruit.draw()

        })

        //removing fruits when off screen and colliding with player
        this.fruits = this.fruits.filter((fruit) => {

            if (fruit.collision(this.player) || fruit.x < -50) {
                return false

            } else {
                return true

            }

        })

        //removing bats when off screen or collidng with player

        this.bats = this.bats.filter((bat) => {

            if (bat.collision(this.player) || bat.x < -50) {
                return false

            } else {
                return true
            }
        })

        if (this.player.hp === 0) {
            let heading = document.querySelector('.heading')
            heading.innerText = 'You died'
            noLoop()
        }

    }


    score() {
        this.player.score += 10
        let score = document.querySelector('.score')
        score.innerText = "Score:" + " " + this.player.score

    }

    timer() {
        var timeleft = 120
        let heading = document.querySelector('.heading')

        var GameTimer = setInterval(() => {

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

            if (timeleft === 0 && this.player.score < 50) {
                heading.innerText = 'You Lose'
                console.log(this.player.score)
                heading.classList.add('lose')


            }

            if (timeleft === 0 && this.player.score > 50) {
                heading.innerText = 'You win'
                heading.classList.add('win')
            }

        }, 1000);

    }

}