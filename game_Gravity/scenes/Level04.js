class Level04 extends Scene {
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
// --- PLATFORMS ---
// ================================
// --- FLOORS ([x, y, w, h]) ---
        let floor_1 = [375, 300, 200, 450] // Starting Platform
        let floor_2 = [825, 200, 20, 500] // Right Middle Wall

// -------------------------------------------------------------
// --- CEILINGS ([x, y, w, h]) ---
        let ceiling_1 = [650, 500, 20, 600] // Left Middle Wall
        // 500

// -------------------------------------------------------------
// --- SINGLE SPIKES ([x, y, w, h]) ---
        let spike_1 = [ceiling_1[0], ceiling_1[1] + 11, 10, 20] // Attached to bottom of ceiling_1
        let spike_2 = [floor_2[0], floor_2[1] - 11, 10, 20] // Attached to top of floor_2

// -------------------------------------------------------------
// --- SPIKE SPAWNERS ([x, y, w, h, horizontal, amount]) ---
        let spikeSpawner_1 = [671, 200, 10, 20, false, 16]
        let spikeSpawner_2 = [804, 200, 10, 20, false, 16]

// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let floorPlatforms = [floor_1, floor_2]
        let ceilingPlatforms = [ceiling_1]

        floorPlatforms = PlatformAdjust.platformAdjustFloor(floorPlatforms)
        ceilingPlatforms = PlatformAdjust.platformAdjustCeiling(ceilingPlatforms)

// -------------------------------------------------------------
// --- PLATFORM ATTACHMENTS ---
        // spike_1 = Attach.attach(spike_1, ceiling_1, "bottom")
        // spike_2 = Attach.attach(spike_2, floor_2, "bottom")
        // spikeSpawner_1 = Attach.attach(spikeSpawner_1, ceiling_1, "right")
        // spikeSpawner_2 = Attach.attach(spikeSpawner_2, floor_2, "left")

// -------------------------------------------------------------
// --- ALL OBJECTS ---
        let all_platforms = [floorPlatforms, ceilingPlatforms]
        let allSpikes = [spike_1, spike_2]
        let allSpikeSpawners = [spikeSpawner_1, spikeSpawner_2]


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
// --- SPIKE GAME OBJECTS ---
        for (let i = 0; i < allSpikes.length; i++){
                this.addGameObject(new SpikeGameObject("Spike Game Object"), allSpikes[i][0], allSpikes[i][1], allSpikes[i][2], allSpikes[i][3])
        }

// -------------------------------------------------------------
// --- SPIKE SPAWNER GAME OBJECTS ---
        for (let i = 0; i < allSpikeSpawners.length; i++){
                this.addGameObject(new Spawner("Spawner", allSpikeSpawners[i][4], allSpikeSpawners[i][5]), allSpikeSpawners[i][0], allSpikeSpawners[i][1], allSpikeSpawners[i][2], allSpikeSpawners[i][3])
}

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])

// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new SceneController(Level04, Level03))) // Current Scene, Next Scene
    }
}