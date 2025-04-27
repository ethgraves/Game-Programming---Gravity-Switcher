class PlayerJumping extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        if (PlayerGlobals.get("isGrounded")) {
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                if (PlayerGlobals.get("normalGravity")) {
                    PlayerGlobals.set("isGrounded", false)
                    this.rigidBody.vy = -200
                    console.log('Check1')
                }
                else{
                    PlayerGlobals.set("isGrounded", false)
                    this.rigidBody.vy = +200
                    console.log('Check1')
                }
            }
        }

        else{
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                console.log('Check2')
                this.rigidBody.gravity = -this.rigidBody.gravity
                if (PlayerGlobals.get("normalGravity") && (this.rigidBody.vy >= 150)) {
                    this.rigidBody.vy = 150
                    PlayerGlobals.set("normalGravity", false)
                }
    
                else if (PlayerGlobals.get("normalGravity") && (0 <= this.rigidBody.vy < 150)) {
                    PlayerGlobals.set("normalGravity", false)
                }
    
                else if (!PlayerGlobals.get("normalGravity") && (this.rigidBody.vy <= -150)) {
                    this.rigidBody.vy = -150
                    PlayerGlobals.set("normalGravity", true)
                }
    
                else if (!PlayerGlobals.get("normalGravity") && (-150 < this.rigidBody.vy <= 0)) {
                    PlayerGlobals.set("normalGravity", true)
                }
            }
    }
    }
}