class PlayerGameObject extends GameObject {
    constructor(name, speed, gravity){
        super(name)
        this.speed = speed
        this.gravity = gravity
    }

    start() {
        this.addComponent(new Rectangle("red", "transparent", 0))
        this.addComponent(new PlayerController(this.speed))
        this.addComponent(new RigidBodyPlatformer(this.gravity)) // Gravity (+ = More Gravity | - = Less Gravity)
    }
}