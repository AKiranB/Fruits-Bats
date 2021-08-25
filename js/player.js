class Player {

    constructor() {

        this.gravity = 0.5
        this.velocity = 0
        this.width = 180
        this.height = 180
        this.x = 0
        this.y = 700 - this.height
        this.playerImage = game.playerImgRun
        this.score = 0
        this.hp = 100;
    }


    draw() {
        this.velocity += this.gravity
        this.y += this.velocity
        if (this.y >= 700 - this.height) {
            this.y = 700 - this.height
        }
        if (this.y < 700 - this.height) {
            game.fruits.forEach((fruit) => {
                if (!fruit.collision(game.player) && this.y < 700 - this.height) {
                    this.playerImage = game.playerImgJump
                    this.width = 160
                    this.height = 160
                }
            })
        } else if (this.y === 700 - this.height) {

            this.playerImage = game.playerImgRun
            this.width = 180
            this.height = 180
        }
        game.fruits.forEach((fruit) => {
            if (fruit.collision(game.player) && this.y < 700 - this.height ||
                fruit.collision(game.player) && this.y === 700 - this.height) {
                this.playerImage = game.playerSecondAttack
            }
        })
        image(this.playerImage, this.x, this.y, this.width, this.height)

    }


    jump() {
        this.velocity = - 10
    }

    moveLeft() {
        if (this.x <= 0) {
            this.x = 0
        } else {
            this.x -= 2
            console.log('moving left')
        }


    }


    moveRight() {
        if (this.x >= 600) {
            this.x = 600
        } else {
            this.x += 2
            console.log('moving right')
        }
    }


    damage() {

        this.hp -= 10
        let hitPoints = document.querySelector('.hp')
        hitPoints.innerText = 'Health:' + ' ' + this.hp

    }
}