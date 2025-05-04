class Level03 extends Scene {
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
        let floor_2 = [825, 200, 20, 500] // Right Middle Wall

// -------------------------------------------------------------
// --- CEILINGS ---
        let ceiling_1 = [650, 500, 20, 600] // Left Middle Wall
        
// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let floorPlatforms = [floor_1, floor_2]
        let ceilingPlatforms = [ceiling_1]

        floorPlatforms = PlatformAdjust.adjustVerticalTop(floorPlatforms)
        ceilingPlatforms = PlatformAdjust.adjustVerticalBottom(ceilingPlatforms)

        let all_platforms = [floorPlatforms, ceilingPlatforms]


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

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])

// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new SceneController(Level03, Level04))) // Current Scene, Next Scene
    }
}