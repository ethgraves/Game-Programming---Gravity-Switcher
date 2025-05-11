class Input{
    static keysdown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static keydown(event) {
      if (!Input.keysdown.includes(event.code))
        Input.keysdown.push(event.code)
      if(!Input.keysDownThisFrame.includes(event.code))
        Input.keysDownThisFrame.push(event.code)
      console.log(Input.keysdown)
    }

    static keyup(event) {
      let index = Input.keysdown.indexOf(event.code)
      Input.keysdown.splice(index, 1)
      if(!Input.keysUpThisFrame.includes(event.code))
        Input.keysUpThisFrame.push(event.code)
    }

    static update(){
      Input.keysDownThisFrame = []
      Input.keysUpThisFrame = []
    }
}