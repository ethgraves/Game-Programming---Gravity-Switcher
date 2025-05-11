class PlatformGameObject extends GameObject {
    start() {
        this.addComponent(new Rectangle("black", "black", 1)) // Fill Color, Line Color, Line Width
        this.addComponent(new PhysicsStatic())
    }
}