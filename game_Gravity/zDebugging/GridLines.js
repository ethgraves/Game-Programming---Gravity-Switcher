class GridLines{
    start(){
        if (Globals.GridLines){
            this.drawGridlines()
        }
    }

    drawGridlines(){
        this.addGameObject(new PlatformGameObject("Platform Game Object"), 10, 10, 10, 10)
    }
}