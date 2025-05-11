class Line extends Component {
  constructor(strokeStyle, lineWidth) {
    super()
    this.strokeStyle = strokeStyle
    this.lineWidth = lineWidth
  }

  // Draws line
  draw() {
    ctx.beginPath()
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth
    
    ctx.moveTo(this.transform.x, this.transform.y)
    ctx.lineTo(this.transform.x2, this.transform.y2)

    ctx.stroke()
  }
  
  // Returns the a, b, and c values of a tangent line
  abc() {
    let tangent = this.tangent()
    // let length = this.length()
    let normalized = tangent.normalized()

    let orthogonalX = normalized.y
    let orthogonalY = -normalized.x

    let a = orthogonalX
    let b = orthogonalY

    let aPlusB = a * this.parent.transform.x + b * this.parent.transform.y
    let c = -aPlusB

    return { a, b, c }

  }
  
  // Returns a tangent line
  tangent() {
    let deltaX = this.transform.x - this.transform.x2
    let deltaY = this.transform.y - this.transform.y2
    
    return new Vector2(deltaX, deltaY)
  }

  // Returns the length of a tangent line
  length() {
    return this.tangent().length()
  }
}