class GameObject {
  components
  
  constructor(name, layer = 0) {
    this.name = name
    this.components = []
    this.addComponent(new Transform())
    this.markForDelete = false
    this.started = false
    this.layer = layer
  }

  // Gets transform for a specific Game Object
  get transform() {
    return this.components[0]
  }

  // Adds a component to a Game Object
  addComponent(component) {
    this.components.push(component)
    component.parent = this
    
    return this
  }

  // Starts the component
  start() {
    for (let component of this.components) {
      component.start()
    }
  }

  // Updates the components
  update() {
    // Loop through all of the components
    for (let component of this.components) {

      // Start the component if it is not already started
      if (!component.started) {
        component.started = true
        component.start()
      }
    }

    // Loop through all components and update them
    for (let component of this.components) {
      component.update()
    }
  }

  // Draws for each component
  draw() {
    for (let component of this.components) {
      component.draw()
    }
  }

  drawUI() {
    for (let component of this.components) {
      component.drawUI()
    }
  }
  
  destroy() {
    this.markForDelete = true
  }

  // Finds a component given a classType
  findComponent(classType) {
    for (let component of this.components) {
      if (component instanceof classType)
        return component
    }
  }

  // Finds all components given a classType
  findComponents(classType) {
    let toReturn = []
    
    for (let component of this.components) {
      if (component instanceof classType)
        toReturn.push(component)
    }
    
    return toReturn
  }
}