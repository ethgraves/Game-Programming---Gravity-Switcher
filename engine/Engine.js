class Engine { 
  static currentScene
  static nextScene

  //Game loop (engine code)
  static tick() {
    if (Engine.nextScene) {
      Engine.currentScene = Engine.nextScene
      Engine.nextScene = null
    }
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = Engine.currentScene.backgroundColor
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    Engine.currentScene.update() // Update the engine
    Engine.currentScene.draw() // Draw the engine
    Input.update()
  }

  static setup() {
    window.addEventListener("keydown", Input.keydown) // Listen for key down events and send them to the Input class
    window.addEventListener("keyup", Input.keyup)     // Listen for key up events and send them to the Input class

    window.addEventListener("mousemove", Input.mousemove)
    window.addEventListener("mousedown", Input.mousedown)
    window.addEventListener("mouseup", Input.mouseup)

    document.addEventListener("wheel", Input.wheel)

    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener("touchstart", Input.touchstart)
    document.addEventListener("touchend", Input.touchend)
    document.addEventListener("touchmove", Input.touchmove, {passive:false})

    canvas = document.getElementById("canv")  // Get the canvas element
    ctx = canvas.getContext("2d")             // Get the 2d drawing context
  }

  static start() {
    Engine.setup()
    setInterval(Engine.tick, Time.msBetweenFrames) //Start the game loop (engine code)
  }
}
