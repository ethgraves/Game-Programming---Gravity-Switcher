class Input {
  static keysdown = []
  static keysDownThisFrame = []
  static keysUpThisFrame = []

  // Checks if a key is done and puts it in the keysdown array
  static keydown(event) {
    if (!Input.keysdown.includes(event.code))
      Input.keysdown.push(event.code)

    if (!Input.keysDownThisFrame.includes(event.code))
      Input.keysDownThisFrame.push(event.code)
  }

  // Checks if a key is up and:
  //  1) Takes it out of the keysdown array
  //  2) Puts it in the keysUpThisFrame array
  static keyup(event) {
    let index = Input.keysdown.indexOf(event.code)
    Input.keysdown.splice(index, 1)

    if (!Input.keysUpThisFrame.includes(event.code))
      Input.keysUpThisFrame.push(event.code)
  }

  // Updates the arrays
  static update() {
    Input.keysDownThisFrame = []
    Input.keysUpThisFrame = []
  }
}