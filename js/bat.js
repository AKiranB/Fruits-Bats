class Bat {
    constructor() {

        this.x = 600
        this.y = Math.floor(Math.random() * 500)
        this.width = 80
        this.height = 80

    }

    draw() {

        console.log(frameCount)
        if (frameCount < 3500) {
            this.x -= 4
        } else if (frameCount > 3500) {
            this.x -= 8
        }

        if (this.y > 300) {
            this.y += Math.random(Math.floor() * 2)

        } else if (this.y < 300) {
            this.y -= Math.random(Math.floor() * 2)
        }



        image(game.batImage, this.x, this.y, this.width, this.height)
    }


    // should ideally have created collision in Game and then added a second param
    // objectInfo, would have saved repeating the code
    collision(playerInfo) {

        let batX = this.x + this.width / 2;
        let batY = this.y + this.height / 2;

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(batX, batY, playerX, playerY) > 60) {

            return false

        } else {

            game.player.damage()

            return true
        }

    }


}