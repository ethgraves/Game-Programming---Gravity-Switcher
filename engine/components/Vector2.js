class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // Checks if the x and y of one vector is equal to the x and y of another
  equals(other) {
    return (this.x === other.x) && (this.y == other.y)
  }

  // Creates and returns a new vector given a game object
  static fromGameObject(gameObject) {
    return new Vector2(gameObject.transform.x, gameObject.transform.y)
  }

  // Returns the length of a vector
  length() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2))
  }

  // Returns the normalized vector
  normalized() {
    let length = this.length()

    return new Vector2((this.x / length), (this.y / length))
  }

  // Adds one vector to another vector
  add(other) {
    return new Vector2((this.x + other.x), (this.y + other.y))
  }

  // Subtracts one vector from another vector
  minus(other) {
    return new Vector2((this.x - other.x), (this.y - other.y))
  }

  // Takes the dot product of two vectors
  dot(other) {
    return (this.x * other.x) + (this.y * other.y)
  }

  // Scales a vector
  scaled(scalar) {
    return new Vector2((this.x * scalar), (this.y * scalar))
  }

  // Negates a vector
  negate() {
    return new Vector2(-this.x, -this.y)
  }

  // Returns a perpendicular vector
  perp(){
    return new Vector2(this.y, -this.x)
  }
}