class Spawner extends GameObject{
    constructor(name, horizontal){
        super(name)
        this.horizontal = horizontal
    }

    start(){
        this.addComponent(new SpikeSpawner(this.name, this.horizontal))
    }
}