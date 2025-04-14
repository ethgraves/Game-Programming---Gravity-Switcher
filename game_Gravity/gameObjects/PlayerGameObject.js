class PlayerGameObject extends GameObject {
    constructor(name, speed){
        super(name)
        this.speed = speed
    }

    start() {
        this.addComponent(new Rectangle("red", "transparent", 0))
        this.addComponent(new PlayerController(this.speed))
        this.addComponent(new RigidBodyPlatformer(200)) // Gravity (+ = More Gravity | - = Less Gravity)
    }
}