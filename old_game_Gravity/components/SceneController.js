class SceneController extends Component {
    static getScene(){
        return Globals.allScenes[Globals.currentLevel]
    }
}