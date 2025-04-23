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
        let floor_1 = [375, 520, 200, 450]


        // Wall Aspects (left-right, top-bottom)
        let wall_1 = [737, 250, 20, 500]


        // Ceiling Aspects (left-right, top-bottom)
        let pass3


        // Finish Aspects
            // Finish Platform
        let finish_floor = [1100, 150, 180, 400]
        let finish_wall_left = [(finish_floor[0] - (finish_floor[2] / 2) - 5), (finish_floor[1] + 10), 10, 400]
        let finish_wall_right = [(finish_floor[0] + (finish_floor[2] / 2) + 5), (finish_floor[1] + 10), 10, 400]

            // Green Finish Line
        let finish_line = [finish_floor[0], (finish_floor[1] + (finish_floor[3] / 2) + 5), finish_floor[2] + 1, 10]

        
        // List with all Platforms (left to right)
        let all_platforms = [floor_1, wall_1]


        // Game Objects
            // Actual Level Game Objects
        this.addGameObject(new GameObject().addComponent(new Text("blue", "Times New Roman")))
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[0][0], all_platforms[0][1], all_platforms[0][2], all_platforms[0][3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[1][0], all_platforms[1][1], all_platforms[1][2], all_platforms[1][3])

            // Finish Structure Game Objects
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])

            // Controller(s)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level02, Level03))) // Current Scene, Next Scene
    }
}