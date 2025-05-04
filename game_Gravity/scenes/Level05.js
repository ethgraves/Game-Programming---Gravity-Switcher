class Level05 extends Scene {
    start() {
// ===============================================================================================================
// --- PLAYER ---
// ==============
        let playerX = 200
        let playerY = 490
        let playerWidth = 15
        let playerHeight = 15
        let playerSpeed = 150
        let playerGravity = 350


// ===============================================================================================================
// --- OBJECTS ---
// ================================
// --- PLATFORMS ([x, y, w, h]) ---
        // Adjust Vertical Top                  From top-left to bottom-right:
        let AVT_p_1 = [250, 500, 200, 450]      // (BT-1)
        let AVT_p_2 = [780, 305, 20, 225]       // (B-5)
        let AVT_p_3 = [950, 150, 20, 200]               // (T-6)

        // Adjust Vertical Bottom
        let AVB_p_1 = [540, 520, 20, 225]       // (B-3)
        let AVB_p_2 = [1320, 520, 20, 160]      // (B-7)
        let AVB_p_3 = [160, 500, 20, 135]               // (T-2)
        let AVB_p_4 = [350, 375, 20, 235]               // (T-4)

        // Adjust Horizontal Left
        let AHL_p_1 = [350, 520, 200, 20]       // (B-2)
        let AHL_p_2 = [540, 305, 250, 20]       // (B-4)
        let AHL_p_3 = [790, 520, 540, 20]       // (B-6)
        let AHL_p_4 = [150, 365, 200, 20]               // (T-3)
        let AHL_p_5 = [350, 150, 610, 20]               // (T-5)
        let AHL_p_6 = [950, 340, 150, 20]               // (T-7)
        let AHL_p_7 = [1300, 350, 30, 20]               // (T-8)

        // Adjust Horizontal Right


// -------------------------------------------------------------
// --- SINGLE SPIKES ([x, y, w, h]) ---
        let spike_1 = [350, 520, 200, 20]
        let spike_2

// -------------------------------------------------------------
// --- SPIKE SPAWNERS ([x, y, w, h, horizontal, amount]) ---
        let spikeSpawner_1 = [671, 165, 10, 20, false, 16]
        let spikeSpawner_2 = [804, 200, 10, 20, false, 16]

// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let adjustVerticalTopPlatforms = [AVT_p_1, AVT_p_2, AVT_p_3]
        let adjustVerticalBottomPlatforms = [AVB_p_1, AVB_p_2, AVB_p_3, AVB_p_4]
        let adjustHorizontalLeftPlatforms = [AHL_p_1, AHL_p_2, AHL_p_3, AHL_p_4, AHL_p_5, AHL_p_6, AHL_p_7]

        let adjustVerticalTopSpikes = []
        let adjustVerticalBottomSpikes = []
        let adjustHorizontalLeftSpikes = [spike_1]

        adjustVerticalTopPlatforms = PlatformAdjust.adjustVerticalTop(adjustVerticalTopPlatforms)
        adjustVerticalBottomPlatforms = PlatformAdjust.adjustVerticalBottom(adjustVerticalBottomPlatforms)
        adjustHorizontalLeftPlatforms = PlatformAdjust.adjustHorizontalLeft(adjustHorizontalLeftPlatforms)

        adjustVerticalTopSpikes = PlatformAdjust.adjustVerticalTop(adjustVerticalTopSpikes)
        adjustVerticalBottomSpikes = PlatformAdjust.adjustVerticalBottom(adjustVerticalBottomSpikes)
        adjustHorizontalLeftSpikes = PlatformAdjust.adjustHorizontalLeft(adjustHorizontalLeftSpikes)



// -------------------------------------------------------------
// --- ALL OBJECTS ---
        let all_platforms = [adjustVerticalTopPlatforms, adjustHorizontalLeftPlatforms, adjustVerticalBottomPlatforms]
        let allSpikes = []
        let allAdjustedSpikes = [adjustVerticalTopSpikes, adjustVerticalBottomSpikes, adjustHorizontalLeftSpikes]
        let allSpikeSpawners = []


// ===============================================================================================================
// --- FINISH PLATFORM ---
// =======================
        // Finish Platform
        let finish_floor = [1200, 150, 180, 400]
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
                for (let j = 0; j < all_platforms[i].length; j++)
                        this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[i][j][0], all_platforms[i][j][1], all_platforms[i][j][2], all_platforms[i][j][3])
        }

// -------------------------------------------------------------
// --- SPIKE GAME OBJECTS ---
        try{
                for (let i = 0; i < allSpikes.length; i++)
                        this.addGameObject(new SpikeGameObject("Spike Game Object"), allSpikes[i][0], allSpikes[i][1], allSpikes[i][2], allSpikes[i][3])
        } catch(error){}

        try{
                for (let i = 0; i < allAdjustedSpikes.length; i++)
                        for (let j = 0; j < allAdjustedSpikes[i].length; j++)
                                this.addGameObject(new SpikeGameObject("Spike Game Object"), allAdjustedSpikes[i][j][0], allAdjustedSpikes[i][j][1], allAdjustedSpikes[i][j][2], allAdjustedSpikes[i][j][3])
        } catch(error){}

// -------------------------------------------------------------
// --- SPIKE SPAWNER GAME OBJECTS ---
        try{
                for (let i = 0; i < allSpikeSpawners.length; i++)
                        this.addGameObject(new Spawner("Spawner", allSpikeSpawners[i][4], allSpikeSpawners[i][5]), allSpikeSpawners[i][0], allSpikeSpawners[i][1], allSpikeSpawners[i][2], allSpikeSpawners[i][3])
        } catch(error){}

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])

// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new SceneController(Level05, Level05))) // Current Scene, Next Scene
    }
}