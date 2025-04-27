class PlayerCollision extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        let [pl, pr, pt, pb] = Collisions.getEdgesOfRectangle(this.parent)


        if (this.rigidBody.lastCollisionY) {
            let [cl, cr, ct, cb] = Collisions.getEdgesOfRectangle(this.rigidBody.lastCollisionY)

            if (pb <= ct) {
                PlayerGlobals.isGrounded = true
                PlayerGlobals.normalGravity = true
                this.transform.y -= 0.0001
                this.rigidBody.vy = 0
            }

            else if (pt >= cb) {
                PlayerGlobals.isGrounded = true
                PlayerGlobals.normalGravity = false
                this.transform.y += 0.0001
                this.rigidBody.vy = 0
            }

            else if (pb > ct) {
                this.rigidBody.vy = 10
            }

            else if (pt < cb) {
                this.rigidBody.vy = -10
            }
        }
    }
}