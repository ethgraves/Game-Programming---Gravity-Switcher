class SceneController extends Component {
    constructor(currentScene, nextScene){
        super()
        this.currentScene = currentScene
        this.nextScene = nextScene
    }

    update(){
        console.log(Globals.noclip)

        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let finishGameObject = Engine.currentScene.findGameObject("Finish Game Object")
        let spikeGameObjects = Engine.currentScene.findGameObjects("Spike Game Object")
        let sawGameObjects = Engine.currentScene.findGameObjects("Saw Game Object")
        

        // Checks if player falls too far (restarts level)
        // if (this.transform.y > 600) Engine.nextScene = Engine.currentScene
        if (playerGameObject.transform.y > window.innerHeight + 30 || playerGameObject.transform.y < -30){
            console.log('Fall')
            Engine.nextScene = new this.currentScene()
        }
        // if (this.transform.y > 600) Engine.nextScene = this.nextScene

        if (Collisions.inCollision(playerGameObject, finishGameObject)){
            console.log('Win')
            Engine.nextScene = new this.nextScene()
        }

// ===============================================================================================================
// --- CHEAT CODES ---
// =======================

    if (Input.keysDownThisFrame.includes("KeyQ")){
        if (Globals.noclip == false) Globals.noclip = true
        else Globals.noclip = false
    }

        if (!Globals.noclip){
            for (let spikeGameObject of spikeGameObjects){
                if (Collisions.inCollision(playerGameObject, spikeGameObject)){
                    PlayerGlobals.set("isGrounded", true)
                    Engine.nextScene = new this.currentScene()
                }
            }

            for (let sawGameObject of sawGameObjects){
                if (Collisions.inCollision(playerGameObject, sawGameObject)){
                    PlayerGlobals.set("isGrounded", true)
                    Engine.nextScene = new this.currentScene()
                }
            }
        }
    } 
}