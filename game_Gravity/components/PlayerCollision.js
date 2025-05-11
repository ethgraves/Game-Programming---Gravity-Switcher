class PlayerCollision extends Component {
    constructor(speed) {
        super()
        this.speed = speed
    }

    start() {
        this.rigidBody = this.parent.findComponent(PlayerGlobals).rigidBody
    }

    update() {
        PlayerGlobals.set("isGrounded", false)

        let [pLeft, pRight, pTop, pBottom] = Collisions.getEdgesOfRectangle(this.parent)

        if (this.rigidBody.lastCollisionY) {
            let [cLeft, cRight, cTop, cBottom] = Collisions.getEdgesOfRectangle(this.rigidBody.lastCollisionY)

            if (pBottom <= cTop) {
                if (PlayerGlobals.get("normalGravity")) {
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

            else if (pTop >= cBottom) {
                if (PlayerGlobals.get("normalGravity")) {
                    PlayerGlobals.set("normalGravity", false)
                    this.transform.y += 0.0001
                    this.rigidBody.vy = 0
                }

                else {
                    PlayerGlobals.set("isGrounded", true)
                    PlayerGlobals.set("normalGravity", false)
                    this.transform.y += 0.0001
                    this.rigidBody.vy = 0
                }
            }

            else {
                PlayerGlobals.set("isGrounded", false)
            }
        }
    }
}