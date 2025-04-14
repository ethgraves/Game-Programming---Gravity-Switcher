class PlayerController extends Component {
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.isGrounded = false
        //this.speed = 100
        this.rigidBody = this.parent.findComponent(RigidBody)
    }

    update(){
        const a = [Level01]

        // Checks if player falls too far (restarts level)
        if (this.transform.y > 400) Engine.nextScene = new a[0]()

        // Resests isGrounded
        this.isGrounded = false

        // Resets then sets velocity based on keys
        this.rigidBody.vx = 0
        if (Input.keysdown.includes("ArrowLeft")) this.rigidBody.vx = -this.speed
        if (Input.keysdown.includes("ArrowRight")) this.rigidBody.vx = this.speed

        // Finds the edges of the player
        // playerLeft, playerRight, playerTop, playerBottom
        let [pl, pr, pt, pb] = Collisions.getEdgesOfRectangle(this.parent)


        if (this.rigidBody.lastCollisionY){
            let [cl, cr, ct, cb] = Collisions.getEdgesOfRectangle(this.rigidBody.lastCollisionY)

            if (pb <= ct) {
                this.isGrounded = true
                this.transform.y -= 0.0001
                this.rigidBody.vy = 0
            }

            else{
                this.rigidBody.vy = 10
            }
        }


        if (this.isGrounded){
            if (Input.keysDownThisFrame.includes("ArrowUp")){
                this.isGrounded = false
                this.rigidBody.vy = -100
            }
        }
    }
}