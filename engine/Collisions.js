class Collisions {

// ==========================================================================
// --- COLLISION DETERMINER ---
// ============================
  static inCollision(gameObject1, gameObject2) {
    if (gameObject1.findComponent(Circle) && gameObject2.findComponent(Circle)) return Collisions.circleCircle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Circle) && gameObject2.findComponent(Rectangle)) return Collisions.circleRectangle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Circle) && gameObject2.findComponent(Line)) return Collisions.circleLine(gameObject1, gameObject2)
    if (gameObject1.findComponent(Rectangle) && gameObject2.findComponent(Circle)) return Collisions.rectangleCircle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Rectangle) && gameObject2.findComponent(Rectangle)) return Collisions.rectangleRectangle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Rectangle) && gameObject2.findComponent(Line)) return Collisions.rectangleLine(gameObject1, gameObject2)
    if (gameObject1.findComponent(Line) && gameObject2.findComponent(Circle)) return Collisions.lineCircle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Line) && gameObject2.findComponent(Rectangle)) return Collisions.lineRectangle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Line) && gameObject2.findComponent(Line)) return Collisions.lineLine(gameObject1, gameObject2)
  }

// ==========================================================================
// --- COLLISION CHECKER ---
// =========================
  // Checks if a circle is in collision with another circle
  static circleCircle(one, two) {
    return (Vector2.fromGameObject(one).minus(Vector2.fromGameObject(two)).length()) < (one.transform.r + two.transform.r)
  }

  // Checks if a circle is in collision with a rectangle
  static circleRectangle(one, two) {
    let circleCenter = Vector2.fromGameObject(one)
    let radius = one.transform.r

    let [leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect] = Collisions.getEdgesOfRectangle(two)
    let [upperLeftRect, upperRightRect, lowerRightRect, lowerLeftRect] = Collisions.getCornersOfRectangle(two)


    if (Collisions.isPointInRectangle(circleCenter, leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, upperLeftRect, upperRightRect)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, upperRightRect, lowerRightRect)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, lowerRightRect, lowerLeftRect)) return true
    if (Collisions.isCircleIntersectingLineSegment(circleCenter, radius, lowerLeftRect, upperLeftRect)) return true
    return false

  }

  // Checks if a circle is in collision with a line
  static circleLine(one, two) {
    let circleCenter = Vector2.fromGameObject(one)
    let radius = one.transform.r

    let [point1, point2] = Collisions.getEndsOfLine(two)

    return Collisions.isCircleIntersectingLineSegment(circleCenter, radius, point1, point2)
  }

  // Checks if a rectangle is in collision with a circle
  static rectangleCircle(one, two) {
    return Collisions.circleRectangle(two, one)
  }

  // Checks if a rectangle is in collision with another rectangle
  static rectangleRectangle(one, two) {
    let [left1, right1, top1, bottom1] = Collisions.getEdgesOfRectangle(one)
    let [left2, right2, top2, bottom2] = Collisions.getEdgesOfRectangle(two)

    return !((left1 > right2) || (right1 < left2) || (top1 > bottom2) || (bottom1 < top2))
  }

  // Checks if a rectangle is in collision with a line 
  static rectangleLine(one, two) {
    let [leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect] = this.getEdgesOfRectangle(one)
    let [linePoint1, linePoint2] = Collisions.getEndsOfLine(two)
    let [upperLeftRect, upperRightRect, lowerRightRect, lowerLeftRect] = Collisions.getCornersOfRectangle(one)

    if (this.isPointInRectangle(linePoint1, leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect)) return true
    if (this.isPointInRectangle(linePoint2, leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect)) return true

    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, upperLeftRect, upperRightRect)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, upperRightRect, lowerRightRect)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, lowerRightRect, lowerLeftRect)) return true
    if (Collisions.areLineSegmentsIntersecting(linePoint1, linePoint2, lowerLeftRect, upperLeftRect)) return true

    return false
  }


  // Checks if a line is in collision with a circle
  static lineCircle(one, two) {
    return Collisions.circleLine(two, one)
  }

  // Checks if a line is in collision with a rectangle
  static lineRectangle(one, two) {
    return Collisions.rectangleLine(two, one);
  }

  // Checks if a line is in collision with another line
  static lineLine(one, two) {
    let [start1, end1] = Collisions.getEndsOfLine(one)
    let [start2, end2] = Collisions.getEndsOfLine(two)

    return Collisions.areLineSegmentsIntersecting(start1, end1, start2, end2)
  }

 

// ==========================================================================
// --- Helper Functions ---
// ========================
// --- PARTS OF OBJECTS ---
// ------------------------
  // Gets the edges of a given rectangle
  static getEdgesOfRectangle(gameObject) {
    let leftEdgeRectangle = gameObject.transform.x - (gameObject.transform.w / 2)
    let rightEdgeRect = gameObject.transform.x + (gameObject.transform.w / 2)
    let topEdgeRect = gameObject.transform.y - (gameObject.transform.h / 2)
    let bottomEdgeRect = gameObject.transform.y + (gameObject.transform.h / 2)

    return [leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect]
  }

  // Gets the corners of a given rectangle
  static getCornersOfRectangle(gameObject) {
    let [leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect] = Collisions.getEdgesOfRectangle(gameObject)

    let upperLeftRect = new Vector2(leftEdgeRectangle, topEdgeRect)
    let upperRightRect = new Vector2(rightEdgeRect, topEdgeRect)
    let lowerRightRect = new Vector2(rightEdgeRect, bottomEdgeRect)
    let lowerLeftRect = new Vector2(leftEdgeRectangle, bottomEdgeRect)

    return [upperLeftRect, upperRightRect, lowerRightRect, lowerLeftRect]
  }

  // Gets the line segments of a given rectangle
  static getLineSegmentsOfRectangle(gameObject) {
    let [upperLeftRect, upperRightRect, lowerRightRect, lowerLeftRect] = Collisions.getCornersOfRectangle(gameObject)

    return [new Line2(upperLeftRect, upperRightRect), new Line2(upperRightRect, lowerRightRect), new Line2(lowerRightRect, lowerLeftRect), new Line2(lowerLeftRect, upperLeftRect)]
  }

  // Gets the end points of a given line
  static getEndsOfLine(gameObject) {
    let point1 = new Vector2(gameObject.transform.x, gameObject.transform.y)
    let point2 = new Vector2(gameObject.transform.x2, gameObject.transform.y2)

    return [point1, point2]
  }

  
// ----------------------------------------------------------------------------
// --- GEOMETRY ---
// ----------------
  // Finds the closest point on an infinite line
  static findClosestPointOnInfiniteLine(point, point1, point2) {
    let pointMinusOne = point.minus(point1)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let pointOnInfiniteLine = point1.add(tangentNormalized.scaled(tangentNormalized.dot(pointMinusOne)))

    return pointOnInfiniteLine
  }

  // Finds the closest point on a line segment
  static findClosestPointOnLineSegment(point, point1, point2) {
    let pointOnLine = this.findClosestPointOnInfiniteLine(point, point1, point2)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let lengthOfLine = point2.minus(point1).length()
    let toPoint = pointOnLine.minus(point1)
    let toPointLength = tangentNormalized.dot(toPoint)

    if (toPointLength < 0) return point1
    
    if (toPointLength > lengthOfLine) return point2
    
    return pointOnLine
  }

  // Gets the A, B, and C from the Ax + By + C = 0 eqatuon
  static findLineABC(point1, point2) {
    let A = point2.y - point1.y
    let B = -(point2.x - point1.x)
    let C = -new Vector2(A, B).dot(point1)

    return [A, B, C]
  }


// ----------------------------------------------------------------------------
// --- BOOLEAN CHECKS ---
// ----------------------
  // Checks if a specific point is in a rectangle
  static isPointInRectangle(point, leftEdgeRectangle, rightEdgeRect, topEdgeRect, bottomEdgeRect) {
    return (point.x > leftEdgeRectangle) && (point.x < rightEdgeRect) && (point.y > topEdgeRect) && (point.y < bottomEdgeRect)
  }

  // Checks if a point is on an infinite line within a line segment
  static isPointOnInfiniteLineWithinLineSegment(point, point1, point2) {
    let lengthOfLine = point2.minus(point1).length()
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let toPoint = point.minus(point1)
    let toPointLength = tangentNormalized.dot(toPoint)

    return (toPointLength >= 0) && (toPointLength <= lengthOfLine)
  }

  // Checks if two line segments intersect
  static areLineSegmentsIntersecting(point1A, point2A, point1B, point2B) {
    let [A1, B1, C1] = Collisions.findLineABC(point1A, point2A)
    let [A2, B2, C2] = Collisions.findLineABC(point1B, point2B)

    let x = B1 * C2 - B2 * C1
    let y = C1 * A2 - C2 * A1
    let z = A1 * B2 - A2 * B1

    if (z == 0) return false  // This means the two lines are parallel

    let collision = new Vector2(x / z, y / z)

    return this.isPointOnInfiniteLineWithinLineSegment(collision, point1A, point2A) && this.isPointOnInfiniteLineWithinLineSegment(collision, point1B, point2B)
  }

  // Finds infinite line - infinite line collision
  static findInfiniteLineInfiniteLineCollision(line1, line2) {
    let [A1, B1, C1] = line1.ABC()
    let [A2, B2, C2] = line2.ABC()

    let x = B1 * C2 - B2 * C1
    let y = C1 * A2 - C2 * A1
    let z = A1 * B2 - A2 * B1

    if (z == 0) return  // This means the two lines are parallel

    let collision = new Vector2(x / z, y / z)
    
    return collision
  }

  // Finds line segment - line segment collision
  static findLineSegmentLineSegmentLineCollision(line1, line2) {
    let [A1, B1, C1] = line1.ABC()
    let [A2, B2, C2] = line2.ABC()

    let x = B1 * C2 - B2 * C1
    let y = C1 * A2 - C2 * A1
    let z = A1 * B2 - A2 * B1

    if (z == 0) return  // This means the two lines are parallel
    
    let collision = new Vector2(x / z, y / z)
    
    if (this.isPointOnInfiniteLineWithinLineSegment(collision, line2.point1, line2.point2) && this.isPointOnInfiniteLineWithinLineSegment(collision, line1.point1, line1.point2))
      return collision
    
    return undefined
  }

  // Checks if a circle intersects a line segment
  static isCircleIntersectingLineSegment(circleCenter, radius, point1, point2) {
    if (circleCenter.minus(this.findClosestPointOnLineSegment(circleCenter, point1, point2)).length() < radius) return true
    
    return false
  }
}