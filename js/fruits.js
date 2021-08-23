class Fruits {

    constructor(image) {

        this.image = image
        this.x = 400
        this.y = (Math.random() * 600)
        this.width = 40
        this.height = 40
    }

    draw() {

        this.x -= 2
        image(this.image, this.x, this.y, this.width, this.height)
    }

}