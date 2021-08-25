class Bat {
    constructor() {

        this.x = 720
        this.y = Math.floor(Math.random() * 700)
        this.width = 80
        this.height = 80

    }

    draw() {

        this.x -= 5
        // this.y -= 2.5
        // this.y += 3
        image(game.batImage, this.x, this.y, this.width, this.height)
    }


    // should ideally have created collision in Game and then added a second param
    // objectInfo, would have saved repeating the code
    collision(playerInfo) {

        let batX = this.x + this.width / 2;
        let batY = this.y + this.height / 2;

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(batX, batY, playerX, playerY) > 50) {

            return false

        } else {

            game.player.damage()
            return true
        }

    }


}