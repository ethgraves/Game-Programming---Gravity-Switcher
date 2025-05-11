class RigidBody extends Component {
  constructor(gravity = 0) {
    super()
    this.gravity = gravity
    this.vx = 0
    this.vy = 0
  }

  // Addes velocity
  update() {
    this.vy += this.gravity * Time.deltaTime  // Changes vertical velocity over time (in relation to gravity)

    this.transform.x += this.vx * Time.deltaTime  // Updates x position based on its horizontal velocity
    this.transform.y += this.vy * Time.deltaTime  // Updates y position based on its vertical velocity

  }
}