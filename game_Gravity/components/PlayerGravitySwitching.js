class PlayerGravitySwitching extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        if (!this.isGrounded) {
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                console.log('Check2')
                this.rigidBody.gravity = -this.rigidBody.gravity
                if (PlayerGlobals.normalGravity && (this.rigidBody.vy >= 150)) {
                    this.rigidBody.vy = 150
                    PlayerGlobals.normalGravity = false
                }

                else if (this.normalGravity && (0 <= this.rigidBody.vy < 150)) {
                    PlayerGlobals.normalGravity = false
                }

                else if (!this.normalGravity && (this.rigidBody.vy <= -150)) {
                    this.rigidBody.vy = -150
                    PlayerGlobals.normalGravity = true
                }

                else if (!this.normalGravity && (-150 < this.rigidBody.vy <= 0)) {
                    PlayerGlobals.normalGravity = true
                }
            }
        }
    }
}