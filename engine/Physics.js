class Physics {
  static resolveSlow(movingStartTransform, movingEndGameObject, obstacleGameObject, maxSteps = 50) {
    let offset = new Vector2(movingEndGameObject.transform.x - movingStartTransform.x, movingEndGameObject.transform.y - movingStartTransform.y)
    
    for (let i = 1; i < maxSteps; i++) {
      let percent = i / maxSteps

      movingEndGameObject.transform.x = movingStartTransform.x + offset.x * percent
      movingEndGameObject.transform.y = movingStartTransform.y + offset.y * percent

      let isCollision = Collisions.inCollision(movingEndGameObject, obstacleGameObject)

      if (isCollision) {
        percent = (i - 1) / maxSteps
        
        movingEndGameObject.transform.x = movingStartTransform.x + offset.x * percent
        movingEndGameObject.transform.y = movingStartTransform.y + offset.y * percent
        
        return true
      }
    }

    let percent = 1
    
    movingEndGameObject.transform.x = movingStartTransform.x + offset.x * percent
    movingEndGameObject.transform.y = movingStartTransform.y + offset.y * percent
  }


  static resolvePrecise(movingStartTransform, movingEndGameObject, obstacleGameObject, maxSteps = 50) {
    let offset = new Vector2(movingEndGameObject.transform.x - movingStartTransform.x, movingEndGameObject.transform.y - movingStartTransform.y)

    if (!Collisions.inCollision(movingEndGameObject, obstacleGameObject))
      return false
    
    movingEndGameObject.transform.x = offset.x
    movingEndGameObject.transform.y = offset.y
    
    if (Collisions.inCollision(movingEndGameObject, obstacleGameObject))
      return true

    let lastNonCollision = 0
    let lastCollision = 1
    let nextGuess = (lastCollision + lastNonCollision) / 2

    for (let i = 0; i < maxSteps; i++) {
      movingEndGameObject.transform.x = movingStartTransform.x + offset.x * nextGuess
      movingEndGameObject.transform.y = movingStartTransform.y + offset.y * nextGuess
      
      if (Collisions.inCollision(movingEndGameObject, obstacleGameObject)) 
        lastCollision = nextGuess
      
      else 
        lastNonCollision = nextGuess
      
      nextGuess = (lastCollision + lastNonCollision) / 2
    }

    movingEndGameObject.transform.x = movingStartTransform.x + offset.x * lastNonCollision
    movingEndGameObject.transform.y = movingStartTransform.y + offset.y * lastNonCollision

    return true
  }
}