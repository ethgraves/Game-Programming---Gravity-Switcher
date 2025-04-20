class PlatformGameObject extends GameObject{
    start(){
        this.addComponent(new Rectangle("blue", "lightblue", 1))
        this.addComponent(new PhysicsStatic())
    }
}