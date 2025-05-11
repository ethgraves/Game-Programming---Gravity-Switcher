class Engine {
  static currentScene
  static nextScene

// ==========================================================================
// --- TICK ---
// ============
  static tick() {
    if (Engine.nextScene) {
      Engine.currentScene = Engine.nextScene
      Engine.nextScene = null
    }
    
    canvas.width = window.innerWidth                  // Sets the canvas width to be the width of the window
    canvas.height = window.innerHeight                // Sets the canvas height to be the height of the window
    ctx.clearRect(0, 0, canvas.width, canvas.height)  // Clears the canvas

    ctx.fillStyle = Engine.currentScene.backgroundColor
    
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    Engine.currentScene.update()  // Updates the engine for the current scene
    Engine.currentScene.draw()    // Draws the engine for the current scene
    Input.update()                // Update the input
  }

// ==========================================================================
// --- SETUP ---
// =============
  static setup() {
    window.addEventListener("keydown", Input.keydown) // Listen for key down events and send them to the Input class
    window.addEventListener("keyup", Input.keyup)     // Listen for key up events and send them to the Input class

    canvas = document.getElementById("canv")  // Gets the canvas element
    ctx = canvas.getContext("2d")             // Gets the 2d drawing context
  }

// ==========================================================================
// --- START ---
// =============
  static start() {
    Engine.setup()  // Setup the engine
    setInterval(Engine.tick, Time.msBetweenFrames) // Start the game loop
  }
}
