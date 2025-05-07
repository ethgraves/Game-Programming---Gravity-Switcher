class PlayerCollision extends Component{
    constructor(speed){
        super()
        this.speed = speed
    }

    start(){
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update(){
        PlayerGlobals.set("isGrounded", false)


        let [pl, pr, pt, pb] = Collisions.getEdgesOfRectangle(this.parent)


        if (this.rigidBody.lastCollisionY) {
            let [cl, cr, ct, cb] = Collisions.getEdgesOfRectangle(this.rigidBody.lastCollisionY)

            if (pb <= ct) {
                //console.log("T1")
                if (PlayerGlobals.get("normalGravity")){
                    PlayerGlobals.set("isGrounded", true)
                    this.transform.y -= 0.0001
                    this.rigidBody.vy = 0
                }
                
                else {
                    PlayerGlobals.set("isGrounded", true)
                    PlayerGlobals.set("normalGravity", true)
                    this.transform.y -= 0.0001
                    this.rigidBody.vy = 0
                }
            }

            else if (pt >= cb) {
                //console.log("T2")
                if (PlayerGlobals.get("normalGravity")){
                    this.transform.y += 0.0001
                    this.rigidBody.vy = 0
                }

                else{
                    PlayerGlobals.set("isGrounded", true)
                    PlayerGlobals.set("normalGravity", false)
                    this.transform.y += 0.0001
                    this.rigidBody.vy = 0
                }
            }

            // else if (pb > ct) {
            //     console.log("T3")
            //     this.rigidBody.vy = 10
            // }

            // else if (pt < cb) {
            //     console.log("T4")
            //     this.rigidBody.vy = -10
            // }

            else{
                PlayerGlobals.set("isGrounded", false)
            }
        }
    }
}