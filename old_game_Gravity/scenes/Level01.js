class Level01 extends Scene {
    start() {
        // Player Aspects
        let playerX = 300
        let playerY = 285
        let playerWidth = 15
        let playerHeight = 15
        let playerSpeed = 100
        let playerGravity = 350


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


        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), wall_1X, wall_1Y, wall_1Width, wall_1Height)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), wall_2X, wall_2Y, wall_2Width, wall_2Height)
        this.addGameObject(new SceneController())

    }
}