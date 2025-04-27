class PlayerGlobals extends Component {
    start(){
        this.normalGravity = true
        this.isGrounded = false
        this.rigidBody = this.parent.findComponent(RigidBody)

        this.allPlayerGlobals = [this.normalGravity, this.isGrounded, this.rigidBody]
    }

    static get(varName){
        if (varName == "normalGravity")
            return this.normalGravity

        else if (varName == "isGrounded")
            return this.isGrounded

        else if (varName == "rigidBody")
            return this.rigidBody
    }

    static set(varName, value){
        if (varName == "normalGravity")
            this.normalGravity = value

        else if (varName == "isGrounded")
            this.isGrounded = value

        else if (varName == "rigidBody")
            this.rigidBody = value
    }
}