class PlayerGameObject extends GameObject {
    constructor(name, speed, gravity){
        super(name)
        this.speed = speed
        this.gravity = gravity
    }

    start() {
        this.addComponent(new PlayerGlobals())
        this.addComponent(new Rectangle("red", "transparent", 0))
        this.addComponent(new PlayerController(this.speed))
        // this.addComponent(new PlayerMovement(this.speed))
        // this.addComponent(new PlayerCollision(this.speed))
        // this.addComponent(new PlayerJumping(this.speed))
        // this.addComponent(new PlayerGravitySwitching(this.speed))
        this.addComponent(new RigidBodyPlatformer(this.gravity)) // Gravity (+ = More Gravity | - = Less Gravity)
    }
}