class Player {

    constructor() {

        this.gravity = 0.4
        this.velocity = 0
        this.width = 150
        this.height = 150
        this.x = 0
        this.y = 700 - this.height
        this.playerImage = game.playerImgRun
        // this.score = 600
    }


    draw() {

        this.velocity += this.gravity
        this.y += this.velocity
        if (this.y >= 700 - this.height) {
            this.y = 700 - this.height
        }
        if (this.y < 700 - this.height) {

            this.playerImage = game.playerImgIdle
            this.width = 130
            this.height = 130
        } else {
            this.playerImage = game.playerImgRun
            this.width = 150
            this.height = 150
        }
        image(this.playerImage, this.x, this.y, this.width, this.height)
    }


    jump() {

        this.velocity = - 8
    }
}