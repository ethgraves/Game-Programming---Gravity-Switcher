class PlayerMovement extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        console.log("Norm Gravity = ", PlayerGlobals.normalGravity)
        PlayerGlobals.isGrounded = false

        this.rigidBody.vx = 0

        if (Input.keysdown.includes("ArrowLeft"))
            this.rigidBody.vx = -this.speed

        if (Input.keysdown.includes("ArrowRight"))
            this.rigidBody.vx = this.speed
    }
}