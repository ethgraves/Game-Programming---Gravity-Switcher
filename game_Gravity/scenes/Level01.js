class Level01 extends Scene {
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
        let pass2

// -------------------------------------------------------------
// --- WALLS ---
        // Wall Aspects (left-right, top-bottom)
        let pass3

// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let floorPlatforms = [floor_1]

        floorPlatforms = PlatformAdjust.platformAdjustFloor(floorPlatforms)

        let all_platforms = floorPlatforms


// ===============================================================================================================
// --- FINISH PLATFORM ---
// =======================
        // Finish Platform
        let finish_floor = [850, 150, 180, 400]
        let finish_wall_left = [(finish_floor[0] - (finish_floor[2] / 2) - 5), 160, 10, 400]
        let finish_wall_right = [(finish_floor[0] + (finish_floor[2] / 2) + 5), 160, 10, 400]

        // Green Finish Line
        let finish_Width = finish_floor[2] + 1
        let finish_Height = 10
        let finish_X = 850
        let finish_Y = (finish_floor[1] + (finish_floor[3] / 2) - (finish_Height / 2 - 10))


// ===============================================================================================================
// --- FOR LEVEL ---
// ====================
// --- GAME OBJECTS ---
        this.addGameObject(new GameObject().addComponent(new Text("blue", "Times New Roman")))
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity), playerX, playerY, playerWidth, playerHeight)
        this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[0][0], all_platforms[0][1], all_platforms[0][2], all_platforms[0][3])

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_X, finish_Y, finish_Width, finish_Height)

// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level01, Level02))) // Current Scene, Next Scene
    }
}