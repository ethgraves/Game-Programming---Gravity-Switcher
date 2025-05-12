class TextGameObject extends GameObject {
    constructor(name){
        super(name)
    }

    start() {
        this.addComponent(new TextUpdater())
    }

    update() {
        // let uiText = this.parent.findComponent(Text)
        
        // console.log(uiText)
        // uiTexts[1].text = "test"

        this.addGameObject(new TextGameObject("Text Game Object"))
    }
}