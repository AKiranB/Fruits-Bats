class Game {

    constructor() {
        this.fruits = []
        this.bats = []
        this.fire = []
    }

    setupGame() {

        this.background = new Background();
        this.player = new Player();
        this.timer()

    }

    preLoadGame() {
        //change the speed of the last image
        //background imgs
        this.backgroundImg = [
            { src: loadImage('assets/background/Hills-Layer-01.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/Hills-Layer-02.png'), x: 0, speed: 0.8 },
            { src: loadImage('assets/background/castle.png'), x: 5, speed: 0.8 },
            { src: loadImage('assets/background/Hills-Layer-03.png'), x: 0, speed: 1.7 },
            { src: loadImage('assets/background/Hills-Layer-04.png'), x: 0, speed: 3 },
            { src: loadImage('assets/background/Hills-Layer-06.png'), x: 0, speed: 4 },
            { src: loadImage('assets/background/Hills-Layer-05.png'), x: 0, speed: 5 }

        ]
        //player imgs

        this.playerImgRun = loadImage('assets/character/running-girl-gif.gif')
        this.playerImgJump = loadImage('assets/character/anime-girl-attack2.gif')
        this.playerSecondAttack = loadImage('assets/character/anime-girl-attack.gif')
        this.playerTakeDamage = loadImage('assets/character/anime-girl-damage.gif')

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


        //fire img

        this.fireImg = loadImage('assets/background/fire2.gif')


        //sound
        this.swordSlice = [loadSound('assets/sound/Sword-slice1.mp3'),
        loadSound('assets/sound/Sword-slice2.mp3'),
        loadSound('assets/sound/Sword-slice3.mp3'),
        loadSound('assets/sound/Sword-slice4.mp3')

        ]

    }

    drawGame() {
        clear();
        this.background.draw()
        this.player.draw()

        //spawning the bats and fruit
        if (frameCount % 150 === 0 || frameCount % 375 === 0 || frameCount % 1000 === 0) {
            this.fruits.push(new Fruits(this.fruitsImg[Math.floor(Math.random() * 5)].src))

        }

        //Past a certain point, the bats start to spawn faster and move faster
        if (frameCount < 3500) {
            if (frameCount % 500 === 0 || frameCount % 1500 === 0) {
                this.bats.push(new Bat())
            }
        } else if (frameCount > 3500) {
            if (frameCount % 300 === 0 || frameCount % 1000 === 0) {
                this.bats.push(new Bat())
            }
        } else if (frameCount > 5000) {
            if (frameCount % 200 === 0 || frameCount % 800 === 0) {
                this.bats.push(new Bat())
            }
        }

        //spawning fire

        if (frameCount % 500 === 0) {
            this.fire.push(new Fire(this.fireImg))
        }

        //drawing fire and adding collision
        this.fire.forEach(fire => {

            fire.draw()
            fire.collision(this.player)
        })

        //drawing bat and adding collison
        this.bats.forEach(bat => {

            bat.draw()
            bat.collision(this.player)
        })

        //drawing fruits
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

            if (bat.x < -50) {

                return false

            } else {

                return true
            }
        })

        //remove fire from aray when off screen
        this.fire = this.fire.filter((fire) => {

            if (fire.x < 50) {
                return false
            } else {
                return true
            }
        })


        if (this.player.hp <= 0) {
            let heading = document.querySelector('.heading')
            this.player.hp = 0;
            heading.innerText = 'You died'
            this.timeleft = 0
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

            timer.innerText = `Timer : 00 : ${time - timeleft}`
            timeleft -= 1;

            if (timeleft < 60) {
                timer.innerText = `Timer : 01 : ${time - timeleft - 61}`
            }

            if (timeleft === -1 && this.player.score < 1200) {
                heading.innerText = 'You Lose!'
                console.log(this.player.score)
                heading.classList.add('lose')
            } else if (timeleft === -1 && this.player.score >= 1200 && this.player.hp > 0) {
                heading.innerText = 'You Win!'
                heading.classList.add('win')
            }

        }, 1000);

    }

}