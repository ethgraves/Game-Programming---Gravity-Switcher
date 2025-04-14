class Level01 extends Scene {
    start() {
        // Player Aspects
        let playerX = 300
        let playerY = 285
        let playerWidth = 30
        let playerHeight = 30
        let playerSpeed = 100


        // Floor Aspects (left-right, top-bottom)
            // Wall 1
        let wall_1X = 300
        let wall_1Y = 300
        let wall_1Width = 100
        let wall_1Height = 10


        // Wall Aspects (left-right, top-bottom)
        let pass2


        // Ceiling Aspects (left-right, top-bottom)
        let pass3


        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), 300, 300, 100, 10)

    }
}