class SpikeSpawner extends Component {
    constructor(horizontal = true, numberOfSpikes = 1) {
        super()
        this.horizontal = horizontal
        this.numberOfSpikes = numberOfSpikes
    }

    start() {
        if (this.horizontal) {
            for (let i = 1; i <= this.numberOfSpikes; i++) {
                Engine.currentScene.addGameObject(new SpikeGameObject("Spike Game Object"), (this.transform.x + (i * (this.transform.w * 2))), this.transform.y, this.transform.w, this.transform.h)
            }
        }

        else {
            for (let i = 1; i <= this.numberOfSpikes; i++) {
                Engine.currentScene.addGameObject(new SpikeGameObject("Spike Game Object"), this.transform.x, (this.transform.y + (i * (this.transform.w * 2))), this.transform.h, this.transform.w)
            }
        }
    }
}