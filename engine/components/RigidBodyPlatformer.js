class RigidBodyPlatformer extends RigidBody{
  constructor(gravity = 0){
    super(gravity)
    this.lastCollisionX
    this.lastCollisionY
  }
  update(){
    //Clear collision objects
    this.lastCollisionX = undefined
    this.lastCollisionY = undefined
    //Track original transform
    let originalTransform = new Vector2(this.transform.x, this.transform.y)
    //Resolve in X
    this.transform.x += this.vx * Time.deltaTime
    //Find all PhysicStatic objects
    let physicsStatics = Engine.currentScene.gameObjects.filter(go=>go.findComponent(PhysicsStatic))
    //Loop over all physicStatic objects and see if we are in collision
    for(let physicsStatic of physicsStatics){
      //Check for collisions
      if(Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))
        //Store collision object
        this.lastCollisionX = physicsStatic
    }
    //Track current transform
    originalTransform = new Vector2(this.transform.x, this.transform.y)
    //Update vy
    this.vy += this.gravity * Time.deltaTime
    this.transform.y += this.vy * Time.deltaTime
    //Resolve in Y
    for(let physicsStatic of physicsStatics){
      //Store collision object
      if(Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))
        this.lastCollisionY = physicsStatic
    }
  }
}