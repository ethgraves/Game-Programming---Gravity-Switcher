class RigidBodyReflective extends RigidBody {
  constructor(gravity = 0) {
    super(gravity)
    this.lastCollision
  }

  update() {
    this.lastCollision = undefined  // Clears previous collision

    let originalTransform = new Vector2(this.transform.x, this.transform.y) // Creates vector for before the physics resolution

    this.transform.x += this.vx * Time.deltaTime  // Updates x position based on its horizontal velocity
    this.vy += this.gravity * Time.deltaTime      // Updates vertical velocity based on gravity
    this.transform.y += this.vy * Time.deltaTime  // Updates y position based on its vertical velocity


    let physicsStatics = Engine.currentScene.gameObjects.filter(go => go.findComponent(PhysicsStatic))  // Finds every game object with the PhysicsStatic component

    for (let physicsStatic of physicsStatics) {
      if (Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))  // Checks for collision (using the resolvePrecise method)
        this.lastCollision = physicsStatic  // Stores this collision as the most recent collision on the x axis
    }

    if (this.lastCollision) { // Check if there was a collision
      let N = Line2.fromGameObject(this.lastCollision).normal() // Get normal line from object in collision
      let speed = new Vector2(this.vx, this.vy).length()  // Get the speed of the object
      let V = new Vector2(this.vx, this.vy).normalized()  // Get the normalized vector
      
      if (V.dot(N) >= 1)  // Checks if the dot product of the normalized vector and the normal line is greater than or equal to 1
        N = N.scaled(-1)  // Scale the normal line by -1

      
      let R = V.minus(N.scaled(2 * V.dot(N))) // Get reflection vector

      this.vx = R.x * speed * .9  // Updated horizontal velocity based on the reflection vector and its speed
      this.vy = R.y * speed * .9  // Updated vertical velocity based on the reflection vector and its speed
    }
  }
}