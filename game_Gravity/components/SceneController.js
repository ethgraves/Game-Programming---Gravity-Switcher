class SceneController extends Component {
    constructor(currentScene, nextScene) {
        super()
        this.currentScene = currentScene
        this.nextScene = nextScene
    }

    update() {

        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let finishGameObject = Engine.currentScene.findGameObject("Finish Game Object")
        let spikeGameObjects = Engine.currentScene.findGameObjects("Spike Game Object")
        let sawGameObjects = Engine.currentScene.findGameObjects("Saw Game Object")


        if (playerGameObject.transform.y > window.innerHeight + 30 || playerGameObject.transform.y < -30) {
            Engine.nextScene = new this.currentScene()
        }

        if (Collisions.inCollision(playerGameObject, finishGameObject)) {
            Engine.nextScene = new this.nextScene()
        }

// ===============================================================================================================
// --- CHEAT CODES ---
// =======================

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

        Camera.main.transform.x = window.innerWidth / 2
        Camera.main.transform.y = window.innerHeight / 2
        Camera.main.transform.w = 1
        Camera.main.transform.h = 1
    }
}