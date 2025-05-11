class SawGameObject extends GameObject {
    start() {
        this.addComponent(new Circle("red", "red", 1))
    }
}