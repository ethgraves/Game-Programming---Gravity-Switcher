class SceneController extends Component {
    static allScenes = [Playground, Level01]
    static sceneNumber = 0

    static getScene(){
        return this.allScenes[this.sceneNumber]
    }
}