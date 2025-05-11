class PlayerGameObject extends GameObject {
    constructor(name, speed, gravity, layer) {
        super(name)
        this.speed = speed
        this.gravity = gravity
        this.layer = layer
    }

    start() {
        this.addComponent(new PlayerGlobals())
        this.addComponent(new Rectangle("blue", "transparent", 0))
        this.addComponent(new PlayerMovement(this.speed))
        this.addComponent(new PlayerCollision(this.speed))
        this.addComponent(new PlayerJumping(this.speed))
        this.addComponent(new RigidBodyPlatformer(this.gravity)) // Gravity (+ = More Gravity | - = Less Gravity)
    }
}