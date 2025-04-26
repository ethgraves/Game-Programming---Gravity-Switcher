class Level02 extends Scene {
    start() {
// ===============================================================================================================
// --- PLAYER ---
// ==============        
        let playerX = 300
        let playerY = 285
        let playerWidth = 15
        let playerHeight = 15
        let playerSpeed = 150
        let playerGravity = 350


// ===============================================================================================================
// --- PLATFORMS ([x, y, w, h]) ---
// ================================
// --- FLOORS ---
        // Floor Aspects (left-right, top-bottom)
        let floor_1 = [375, 300, 200, 450] // Starting Platform

// -------------------------------------------------------------
// --- CEILINGS ---
        // Ceiling Aspects (left-right, top-bottom)
        let pass3

// -------------------------------------------------------------
// --- WALLS ---
        // Wall Aspects (left-right, top-bottom)
        let wall_1 = [737, 250, 20, 500] // Middle Wall

// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let floorPlatforms = [floor_1]
        let wallPlatforms = [wall_1]

        floorPlatforms = PlatformAdjust.platformAdjustFloor(floorPlatforms)

        let all_platforms = [floorPlatforms, wallPlatforms]


// ===============================================================================================================
// --- FINISH PLATFORM ---
// =======================
        // Finish Platform
        let finish_floor = [1100, 150, 180, 400]
        let finish_wall_left = [(finish_floor[0] - (finish_floor[2] / 2) - 5), (finish_floor[1] + 10), 10, 400]
        let finish_wall_right = [(finish_floor[0] + (finish_floor[2] / 2) + 5), (finish_floor[1] + 10), 10, 400]

        // Green Finish Line
        let finish_line = [finish_floor[0], (finish_floor[1] + (finish_floor[3] / 2) + 5), finish_floor[2] + 1, 10]



// ===============================================================================================================
// --- FOR LEVEL ---
// ====================
// --- PLAYER GAME OBJECT ---
        this.addGameObject(new GameObject().addComponent(new Text("blue", "Times New Roman")))
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)

// -------------------------------------------------------------
// --- PLATFORM GAME OBJECTS ---
        for (let i = 0; i < all_platforms.length; i++){
            for (let j = 0; j < all_platforms[i].length; j++){
                this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[i][j][0], all_platforms[i][j][1], all_platforms[i][j][2], all_platforms[i][j][3])
            }
        }
        // this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[0][0], all_platforms[0][1], all_platforms[0][2], all_platforms[0][3])
        // this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[1][0], all_platforms[1][1], all_platforms[1][2], all_platforms[1][3])

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])

// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level02, Level03))) // Current Scene, Next Scene
    }
}