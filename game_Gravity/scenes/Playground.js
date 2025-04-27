class Playground extends Scene {
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

        // Wall 2
        let wall_2X = 390
        let wall_2Y = 340
        let wall_2Width = 100
        let wall_2Height = 10

        // Wall 3
        let wall_3X = 300
        let wall_3Y = 100
        let wall_3Width = 100
        let wall_3Height = 10


        // Wall Aspects (left-right, top-bottom)
        let pass2


        // Ceiling Aspects (left-right, top-bottom)
        let pass3


        // Finish Aspects
        let fin_X = 500
        let fin_Y = 340
        let fin_Width = 100
        let fin_Height = 10


        // Game Objects
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), wall_1X, wall_1Y, wall_1Width, wall_1Height)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), wall_2X, wall_2Y, wall_2Width, wall_2Height)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), wall_3X, wall_3Y, wall_3Width, wall_3Height)
        this.addGameObject(new SawGameObject("Saw Game Object"), 100, 100, 30, 30)
        this.addGameObject(new SpikeGameObject("Rectangle Spike Game Object"), 150, 150, 30, 30)
        this.addGameObject(new GameObject("Spawner").addComponent(new SpikeSpawner, true), 250, 200, 10, 20)
        //this.addGameObject(new TriSpikeGameObject("Spike Game Object"), 150, 150, 30, 30)
        this.addGameObject(new FinishGameObject("Finish Game Object"), fin_X, fin_Y, fin_Width, fin_Height)
        this.addGameObject(new GameObject().addComponent(new SceneController(Playground, Level01)))
    }
}