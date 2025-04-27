class PlayerJumping extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        if (PlayerGlobals.isGrounded) {
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                if (PlayerGlobals.normalGravity) {
                    PlayerGlobals.isGrounded = false
                    this.rigidBody.vy = -200
                    console.log('Check1')
                }
                else{
                    PlayerGlobals.isGrounded = false
                    this.rigidBody.vy = +200
                    console.log('Check1')
                }
            }
        }
    }
}