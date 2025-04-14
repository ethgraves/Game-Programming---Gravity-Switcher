class RigidBodyReflective extends RigidBody {
  constructor(gravity = 0) {
    super(gravity)
    this.lastCollision
  }
  update() {
    //Track collision objects
    this.lastCollision = undefined

    //Track original transform
    let originalTransform = new Vector2(this.transform.x, this.transform.y)

    //Update the velocity based on gravity and time
    this.transform.x += this.vx * Time.deltaTime
    this.vy += this.gravity * Time.deltaTime
    this.transform.y += this.vy * Time.deltaTime

    //Get all the obstacles that are labelled as PhysicsStatic
    let physicsStatics = Engine.currentScene.gameObjects.filter(go => go.findComponent(PhysicsStatic))
    //Loop over the obstacles
    for (let physicsStatic of physicsStatics) {
      //Use Physics to see if there is a collision
      if (Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))
        //Track that collision
        this.lastCollision = physicsStatic
    }

    //Check if there was a collision
    if (this.lastCollision) {
      //We need to reflect
      //Get the normal of the line that we collided with
      let N = Line2.fromGameObject(this.lastCollision).normal()
      //Get the speed of the object
      let speed = new Vector2(this.vx, this.vy).length()
      //Get the normalized vector representing velocity
      let V = new Vector2(this.vx, this.vy).normalized()
      //Reverse the normal if the dot product is less than 1
      if (V.dot(N) >= 1) N = N.scaled(-1)
      //Calculate the reflection vector
      let R = V.minus(N.scaled(2*V.dot(N)))
      //Assign new velocity values based on the reflection vector and speed
      this.vx = R.x * speed * .9
      this.vy = R.y * speed * .9
    }
  }
}