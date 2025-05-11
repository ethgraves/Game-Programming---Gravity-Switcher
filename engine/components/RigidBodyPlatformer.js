class RigidBodyPlatformer extends RigidBody {
  constructor(gravity = 0) {
    super(gravity)
    this.lastCollisionX
    this.lastCollisionY
  }

  update() {
    this.lastCollisionX = undefined   // Clears previous collision on x axis
    this.lastCollisionY = undefined   // Clears previous collision on y axis
    
    let originalTransform = new Vector2(this.transform.x, this.transform.y) // Creates vector for before the physics resolution
    
    this.transform.x += this.vx * Time.deltaTime


    let physicsStatics = Engine.currentScene.gameObjects.filter(go => go.findComponent(PhysicsStatic))  // Finds every game object with the PhysicsStatic component

    for (let physicsStatic of physicsStatics) {
      if (Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))  // Checks for collision (using the resolvePrecise method)
        this.lastCollisionX = physicsStatic   // Stores this collision as the most recent collision on the x axis
    }

    originalTransform = new Vector2(this.transform.x, this.transform.y) // Creates vector for after the physics resolution


    this.vy += this.gravity * Time.deltaTime  // Updates vertical velocity based on gravity
    this.transform.y += this.vy * Time.deltaTime  // Updates y position based on its vertical velocity

    
    for (let physicsStatic of physicsStatics) {
      if (Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))  // Checks for collision (using the resolvePrecise method)
        this.lastCollisionY = physicsStatic   // Stores this collision as the most recent collision on the y axis
    }
  }
}