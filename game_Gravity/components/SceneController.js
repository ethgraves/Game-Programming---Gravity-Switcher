class SceneController extends Component {
    constructor(nextScene){
        super()
        this.nextScene = nextScene
    }

    update(){
        if (this.transform.y > 600) Engine.nextScene = new this.nextScene
    }
}