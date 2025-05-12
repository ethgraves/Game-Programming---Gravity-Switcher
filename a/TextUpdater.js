class TextUpdater extends Component {
    update() {
        // let uiTexts = Engine.currentScene.findGameObjects("UI Text Game Object")
        let uiText = this.parent.findComponent(Text)
        
        console.log(uiText)
        // uiTexts[1].text = "test"

        // this.addGameObject(new TextGameObject("Text Game Object").addComponent(new Text("black", "30px Times New Roman", "Start")), 10, 60)

        

        // console.log(uiTexts[1])

        // for (let uiText of uiTexts) {
        //     if (uiText includes("D"))
        // }
    }
}