class UITextGameObject extends GameObject {
    constructor(name){
        super(name)
    }

    start() {
        this.addComponent(new TextUpdater())
    }
}