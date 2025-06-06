class PlayerMovement extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        //console.log("Norm Gravity = ", PlayerGlobals.normalGravity)
        //PlayerGlobals.set("isGrounded", false)

        this.rigidBody.vx = 0

        if (Input.keysdown.includes("ArrowLeft") || Input.keysdown.includes("KeyA"))
            this.rigidBody.vx = -this.speed

        if (Input.keysdown.includes("ArrowRight") || Input.keysdown.includes("KeyD"))
            this.rigidBody.vx = this.speed
    }
}