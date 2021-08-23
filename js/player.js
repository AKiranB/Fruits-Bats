class Player {

    constructor() {

        this.gravity = 0.4
        this.velocity = 0
        this.width = 150
        this.height = 150
        this.x = 0
        this.y = 700 - this.height
        // this.score = 600
    }


    draw() {

        this.velocity += this.gravity
        this.y += this.velocity
        if (this.y >= 700 - this.height) {
            this.y = 700 - this.height
        }
        image(game.playerImg, this.x, this.y, this.width, this.height)
    }


    jump() {

        this.velocity = - 5
    }
}