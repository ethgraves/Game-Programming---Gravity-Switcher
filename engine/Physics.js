class Physics {
  static resolveSlow(movingStartTransform, movingEndGameObject, obstacleGameObject, maxSteps = 50) {
    //Store the original offset
    let offset = new Vector2(movingEndGameObject.transform.x - movingStartTransform.x, movingEndGameObject.transform.y - movingStartTransform.y)
    //Loop through steps
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

    //Try until there is a collision
    //Return collision object



  }

  static resolvePrecise(movingStartTransform, movingEndGameObject, obstacleGameObject, maxSteps = 50) {

    //Store offset
    let offset = new Vector2(movingEndGameObject.transform.x - movingStartTransform.x, movingEndGameObject.transform.y - movingStartTransform.y)

    //Return if there is no final collision
    if (!Collisions.inCollision(movingEndGameObject, obstacleGameObject))
      return false
    movingEndGameObject.transform.x = offset.x
    movingEndGameObject.transform.y = offset.y
    if (Collisions.inCollision(movingEndGameObject, obstacleGameObject))
      return true
    //Return if there is a starting collision

    //Track lastNonCollision percent
    let lastNonCollision = 0
    //Track lastCollision percent
    let lastCollision = 1
    //Guess nextGuess
    let nextGuess = (lastCollision + lastNonCollision) / 2
    //Loop through steps
    for (let i = 0; i < maxSteps; i++) {
      movingEndGameObject.transform.x = movingStartTransform.x + offset.x * nextGuess
      movingEndGameObject.transform.y = movingStartTransform.y + offset.y * nextGuess
      if (Collisions.inCollision(movingEndGameObject, obstacleGameObject)) {
        // - If there is a collision move lastCollision
        lastCollision = nextGuess
      }
      else {
        // - If there isn't a collision move lastNonCollision
        lastNonCollision = nextGuess
      }
      // Find next guess
      nextGuess = (lastCollision + lastNonCollision) / 2

    }
    //Set to lastNonCollision
    movingEndGameObject.transform.x = movingStartTransform.x + offset.x * lastNonCollision
    movingEndGameObject.transform.y = movingStartTransform.y + offset.y * lastNonCollision
    return true


  }
}