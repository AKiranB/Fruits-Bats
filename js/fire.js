class Fire {

    constructor(image) {

        this.image = image
        this.x = 600
        this.y = 590
        this.width = 100
        this.height = 100
    }

    draw() {

        this.x -= 2
        image(this.image, this.x, this.y, this.width, this.height)
    }


    collision(playerInfo) {

        let fireX = this.x + this.width / 2;
        let fireY = this.y + this.height / 2;

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(fireX, fireY, playerX, playerY) > 50) {
            return false

        } else {

            game.player.damage()
            return true
        }

    }
}