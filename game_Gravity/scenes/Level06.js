class Level06 extends Scene {
    start() {
// ===============================================================================================================
// --- PLAYER ---
// ==============
        let playerX = 500
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
        let AVT_p_1 = [820, 100, 20, 280]
        let AVT_p_2 = [670, 200, 50, 130]

        // Adjust Vertical Bottom
        let AVB_p_1 = [460, 500, 20, 400]
        let AVB_p_2 = [640, 500, 20, 300]
        let AVB_p_3 = [1000, 510, 20, 300]

        // Adjust Horizontal Left
        let AHL_p_1 = [450, 0, 380, 180]
        let AHL_p_2 = [450, 725, 560, 450]
        let AHL_p_3 = [450, 100, 380, 20]
        let AHL_p_4 = [630, 510, 380, 20]
        let AHL_p_5 = [640, 210, 100, 20]
        let AHL_p_6 = [680, 375, 240, 10]
        let AHL_p_7 = [640, 475, 120, 80]

        // Adjust Horizontal Right


// -------------------------------------------------------------
// --- SINGLE SPIKES ([x, y, w, h]) ---
        // Adjust Vertical Top                  From top-left to bottom-right:
        let AVT_s_1 = [640, 110, 15, 10]
        let AVT_s_2 = [690, 110, 15, 60]
        let AVT_s_3 = [770, 110, 160, 10]
        let AVT_s_4 = [820, 380, 15, 60]


        // Adjust Vertical Bottom
        let AVB_s_1 = [640, 200, 15, 10]
        let AVB_s_2 = [730, 200, 15, 30]
        let AVB_s_3 = [860, 495, 15, 90]


        // Adjust Horizontal Left
        let AHL_s_1 = [740, 210, 20, 15]
        let AHL_s_2 = [790, 210, 20, 15]
        let AHL_s_3 = [670, 370, 140, 20]
        let AHL_s_4 = [640, 465, 130, 80]
        let AHL_s_5 = [645, 495, 350, 10]
        let AHL_s_6 = [900, 300, 90, 15]
        let AHL_s_7 = [880, 280, 120, 5]
        let AHL_s_8 = [830, 280, 30, 5]

// -------------------------------------------------------------
// --- PLATFORM ADJUSTMENTS ---
        let adjustVerticalTopPlatforms = [AVT_p_1, AVT_p_2]
        let adjustVerticalBottomPlatforms = [AVB_p_1, AVB_p_2, AVB_p_3]
        let adjustHorizontalLeftPlatforms = [AHL_p_1, AHL_p_2, AHL_p_3, AHL_p_4, AHL_p_5, AHL_p_6, AHL_p_7]

        let adjustVerticalTopSpikes = [AVT_s_1, AVT_s_2, AVT_s_3, AVT_s_4]
        let adjustVerticalBottomSpikes = [AVB_s_1, AVB_s_2, AVB_s_3]
        let adjustHorizontalLeftSpikes = [AHL_s_1, AHL_s_2, AHL_s_3, AHL_s_4, AHL_s_5, AHL_s_6, AHL_s_7, AHL_s_8]

        adjustVerticalTopPlatforms = PlatformAdjust.adjustVerticalTop(adjustVerticalTopPlatforms)
        adjustVerticalBottomPlatforms = PlatformAdjust.adjustVerticalBottom(adjustVerticalBottomPlatforms)
        adjustHorizontalLeftPlatforms = PlatformAdjust.adjustHorizontalLeft(adjustHorizontalLeftPlatforms)

        adjustVerticalTopSpikes = PlatformAdjust.adjustVerticalTop(adjustVerticalTopSpikes)
        adjustVerticalBottomSpikes = PlatformAdjust.adjustVerticalBottom(adjustVerticalBottomSpikes)
        adjustHorizontalLeftSpikes = PlatformAdjust.adjustHorizontalLeft(adjustHorizontalLeftSpikes)

// -------------------------------------------------------------
// --- SAWS ([x, y, r]) ---
        let saw_1 = [520, 400, 40]
        let saw_2 = [580, 280, 40]
        let saw_3 = [520, 170, 40]
        let saw_4 = [770, 290, 30]
        let saw_5 = [930, 375, 30]

// -------------------------------------------------------------
// --- ALL OBJECTS ---
        let all_platforms = [adjustVerticalTopPlatforms, adjustHorizontalLeftPlatforms, adjustVerticalBottomPlatforms]
        let allSaws = [saw_1, saw_2, saw_3, saw_4, saw_5]
        let allAdjustedSpikes = [adjustVerticalTopSpikes, adjustVerticalBottomSpikes, adjustHorizontalLeftSpikes]


// ===============================================================================================================
// --- FINISH PLATFORM ---
// =======================
        // Finish Platform
        let finish_floor = [910, 50, 180, 400]
        let finish_wall_left = [(finish_floor[0] - (finish_floor[2] / 2) - 5), (finish_floor[1] + 10), 10, 400]
        let finish_wall_right = [(finish_floor[0] + (finish_floor[2] / 2) + 5), (finish_floor[1] + 10), 10, 400]

        // Green Finish Line
        let finish_line = [finish_floor[0], (finish_floor[1] + (finish_floor[3] / 2) + 5), finish_floor[2] + 1, 10]


// ===============================================================================================================
// --- FOR LEVEL ---
// ====================
// --- PLAYER GAME OBJECT ---
        this.addGameObject(new GameObject().addComponent(new UIText("black", "30px Times New Roman", "Level: 6")), 10, 30)
        this.addGameObject(new PlayerGameObject("Player Game Object", playerSpeed, playerGravity, 1), playerX, playerY, playerWidth, playerHeight)

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
// --- SAW GAME OBJECTS ---
        try{
                for (let i = 0; i < allSaws.length; i++)
                        this.addGameObject(new SawGameObject("Saw Game Object"), allSaws[i][0], allSaws[i][1], allSaws[i][2], allSaws[i][3])
        } catch(error){}

// -------------------------------------------------------------
// --- PLATFORM GAME OBJECTS ---
        
        for (let i = 0; i < all_platforms.length; i++){
                for (let j = 0; j < all_platforms[i].length; j++)
                        this.addGameObject(new PlatformGameObject("Platform Game Object"), all_platforms[i][j][0], all_platforms[i][j][1], all_platforms[i][j][2], all_platforms[i][j][3])
        }

// -------------------------------------------------------------
// --- FINISH STRUCTURE ---
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_floor[0], finish_floor[1], finish_floor[2], finish_floor[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_left[0], finish_wall_left[1], finish_wall_left[2], finish_wall_left[3])
        this.addGameObject(new PlatformGameObject("Platform Game Object"), finish_wall_right[0], finish_wall_right[1], finish_wall_right[2], finish_wall_right[3])
        this.addGameObject(new FinishGameObject("Finish Game Object"), finish_line[0], finish_line[1], finish_line[2], finish_line[3])


// -------------------------------------------------------------
// --- CONTROLLERS ---
        this.addGameObject(new GameObject().addComponent(new SceneController(Level06, Level06))) // Current Scene, Next Scene
    }
}