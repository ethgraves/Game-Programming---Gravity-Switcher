class Line2{
  constructor(point1, point2 ){
    this.point1 = point1
    this.point2 = point2
  }
  equals(other){
    return this.point1.equals(other.point1) && this.point2.equals(other.point2)
  }
  static fromGameObject(lineGameObject){
    return new Line2(new Vector2(lineGameObject.transform.x, lineGameObject.transform.y), new Vector2(lineGameObject.transform.x2, lineGameObject.transform.y2))
  }
  tangent(){
    return new Vector2(this.point2.x - this.point1.x, this.point2.y - this.point1.y)
  }
  tangentNormalized(){
    return this.tangent().normalized()
  }
  normal(){
    return new Vector2(this.tangentNormalized().y, -this.tangentNormalized().x)
  }
  ABC(){
    let A = this.point2.y - this.point1.y
    let B = -(this.point2.x - this.point1.x)
    let C = -new Vector2(A, B).dot(this.point1)

    return [A, B, C]

  }
}
