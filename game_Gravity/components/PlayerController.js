class PlayerController extends Component {
    constructor(speed) {
        super()
        this.speed = speed
    }


    start() {
        this.normalGravity = this.parent.findComponent(PlayerGlobals).normalGravity
        this.isGrounded = this.parent.findComponent(PlayerGlobals).isGrounded
        //this.speed = 100
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update() {
        // const allScenes = [Playground, Level01]

        // Resests isGrounded
        this.isGrounded = false

        // Resets then sets velocity based on keys
        this.rigidBody.vx = 0
        if (Input.keysdown.includes("ArrowLeft") || Input.keysdown.includes("A")) this.rigidBody.vx = -this.speed
        if (Input.keysdown.includes("ArrowRight") || Input.keysdown.includes("D")) this.rigidBody.vx = this.speed

        // Finds the edges of the player
        // playerLeft, playerRight, playerTop, playerBottom
        let [pl, pr, pt, pb] = Collisions.getEdgesOfRectangle(this.parent)


        if (this.rigidBody.lastCollisionY) {
            let [cl, cr, ct, cb] = Collisions.getEdgesOfRectangle(this.rigidBody.lastCollisionY)

            if (pb <= ct) {
                this.isGrounded = true
                this.normalGravity = true
                this.transform.y -= 0.0001
                this.rigidBody.vy = 0
            }

            else if (pt >= cb) {
                this.isGrounded = true
                this.normalGravity = false
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


        if (this.isGrounded) {
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                if (this.normalGravity) {
                    this.isGrounded = false
                    this.rigidBody.vy = -200
                    console.log('Check1')
                }
                else{
                    this.isGrounded = false
                    this.rigidBody.vy = +200
                    console.log('Check1')
                }
            }
        }

        else {
            if (Input.keysDownThisFrame.includes("ArrowUp")) {
                console.log('Check2')
                this.rigidBody.gravity = -this.rigidBody.gravity
                if (this.normalGravity && (this.rigidBody.vy >= 150)) {
                    this.rigidBody.vy = 150
                    this.normalGravity = false
                }

                else if (this.normalGravity && (0 <= this.rigidBody.vy < 150)) {
                    this.normalGravity = false
                }

                else if (!this.normalGravity && (this.rigidBody.vy <= -150)) {
                    this.rigidBody.vy = -150
                    this.normalGravity = true
                }

                else if (!this.normalGravity && (-150 < this.rigidBody.vy <= 0)) {
                    this.normalGravity = true
                }
            }
        }
    }
}