class WinScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new Text("black", "100px Times New Roman", "You Win!")), -190, 0)
    }
}