class GameObject{
  components
  constructor(name, layer = 0){
    this.name = name
    this.components = []
    this.addComponent(new Transform())
    this.markForDelete = false
    this.started = false
    this.layer = layer
  }
  get transform(){
    return this.components[0]
  }
  addComponent(component){
    this.components.push(component)
    component.parent = this
    return this
  }
  start(){
    for(let component of this.components){
      component.start()
    }
  }
  update(){
    for(let component of this.components){
      if(!component.started){
        component.started = true;
        component.start()
      }
    }
    for(let component of this.components){
      component.update()
    }
  }
  draw(){
    for(let component of this.components){
      component.draw()
    }
  }
  destroy(){
    this.markForDelete = true
  }
  findComponent(classType){
    for(let component of this.components){
      if(component instanceof classType)
        return component
    }
  }
  findComponents(classType){
    let toReturn = []
    for(let component of this.components){
      if(component instanceof classType)
        toReturn.push(component)
    }
    return toReturn
  }
}