class SawGameObject extends GameObject {
    start(){
        this.addComponent(new Circle("blue", "blue", 1))
    }
}