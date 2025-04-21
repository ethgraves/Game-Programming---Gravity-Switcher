class Level02 extends Scene {
    start() {
        // Player Aspects
        let playerX = 300
        let playerY = 285
        let playerWidth = 15
        let playerHeight = 15
        let playerSpeed = 150
        let playerGravity = 350

        // =========================================
        // let var = [x, y, width, height]

        // Floor Aspects (left-right, top-bottom)
            // Wall 1
        let floor_1 = [375, 520, 200, 450]
        let floor_2 = [850, 150, 200, 400]


        // Wall Aspects (left-right, top-bottom)
        let pass2


        // Ceiling Aspects (left-right, top-bottom)
        let pass3


        // Finish Aspects
        let finish_Width = floor_2[2] + 1
        let finish_Height = 10
        let finish_X = 850
        let finish_Y = (floor_2[1] + (floor_2[3] / 2) - (finish_Height / 2 - 10))


        // Game Objects
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), floor_1[0], floor_1[1], floor_1[2], floor_1[3])
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level02, Level03))) // Current Scene, Next Scene
    }
}