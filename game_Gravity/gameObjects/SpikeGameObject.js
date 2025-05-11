class SpikeGameObject extends GameObject {
    start() {
        this.addComponent(new Rectangle("red", "red", 1))
    }
}