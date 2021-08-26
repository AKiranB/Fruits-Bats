class Fruits {

    constructor(image) {

        this.image = image
        this.x = 550
        this.y = (Math.random() * 400) + 100
        this.width = 55
        this.height = 55
    }

    draw() {

        this.x -= 2
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {

        let fruitX = this.x + this.width / 2;
        let fruitY = this.y + this.height / 2;

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(fruitX, fruitY, playerX, playerY) > 50) {
            return false

        } else {

            game.score()
            game.swordSlice[Math.floor(Math.random() * 4)].play()
            return true
        }

    }

}