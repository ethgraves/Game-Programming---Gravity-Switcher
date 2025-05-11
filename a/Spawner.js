class Spawner extends GameObject{
    constructor(name, horizontal, numberOfSpikes){
        super(name)
        this.horizontal = horizontal
        this.numberOfSpikes = numberOfSpikes
    }

    start(){
        this.addComponent(new SpikeSpawner(this.horizontal, this.numberOfSpikes))
    }
}