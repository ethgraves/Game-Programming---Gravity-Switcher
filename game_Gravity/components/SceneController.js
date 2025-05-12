class SceneController extends Component {
    constructor(currentScene, nextScene) {
        super()
        this.currentScene = currentScene
        this.nextScene = nextScene
        this.usedNoclip = false
    }

    update() {
// ===============================================================================================================
// --- FIND GAME OBJECTS ---
// =========================
        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let finishGameObject = Engine.currentScene.findGameObject("Finish Game Object")
        let spikeGameObjects = Engine.currentScene.findGameObjects("Spike Game Object")
        let sawGameObjects = Engine.currentScene.findGameObjects("Saw Game Object")


// ===============================================================================================================
// --- SCENE SWITCH DETERMINER ---
// ===============================
        if (playerGameObject.transform.y > window.innerHeight + 30 || playerGameObject.transform.y < -30) {
            Engine.nextScene = new this.currentScene()
            Globals.noclip = false
            this.usedNoclip = false
            Globals.usedNoclip = false
            }


        if (Collisions.inCollision(playerGameObject, finishGameObject) && this.usedNoclip == false) {
            Engine.nextScene = new this.nextScene()
        }

        if (Globals.noclip) {
            this.usedNoclip = true
        }

        if (Collisions.inCollision(playerGameObject, finishGameObject) && this.usedNoclip){
            Engine.nextScene = new this.currentScene()
            Globals.noclip = false
            this.usedNoclip = false
            Globals.usedNoclip = false
        }

        if (this.usedNoclip) Globals.usedNoclip = true

// ===============================================================================================================
// --- CHEAT CODES ---
// ===================

        if (Input.keysDownThisFrame.includes("KeyQ")) {
            if (Globals.noclip == false) Globals.noclip = true
            else Globals.noclip = false
        }

        if (!Globals.noclip) {
            for (let spikeGameObject of spikeGameObjects) {
                if (Collisions.inCollision(playerGameObject, spikeGameObject)) {
                    PlayerGlobals.set("isGrounded", true)
                    Engine.nextScene = new this.currentScene()
                }
            }

            for (let sawGameObject of sawGameObjects) {
                if (Collisions.inCollision(playerGameObject, sawGameObject)) {
                    PlayerGlobals.set("isGrounded", true)
                    Engine.nextScene = new this.currentScene()
                }
            }
        }


// ===============================================================================================================
// --- CAMERA ---
// ==============
        Camera.main.transform.x = window.innerWidth / 2
        Camera.main.transform.y = window.innerHeight / 2
        Camera.main.transform.w = 1
        Camera.main.transform.h = 1
    }
}