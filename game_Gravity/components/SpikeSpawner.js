class SpikeSpawner extends Component{
    constructor(name, horizontal = true){
        super()
        this.name = name
        this.horizontal = horizontal
    }

    start(){
        if (this.horizontal){
            for (let i = 1; i < 10; i++){
                Engine.currentScene.addGameObject(new SpikeGameObject("Spike Game Object"), (this.transform.x + (i * (this.transform.w + 5))), this.transform.y, this.transform.w, this.transform.h)
            }
        }
    }
}