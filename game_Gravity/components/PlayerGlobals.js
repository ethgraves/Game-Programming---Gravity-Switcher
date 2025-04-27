class PlayerGlobals extends Component {
    static normalGravity = true
    static isGrounded = false
    start(){
        this.rigidBody = this.parent.findComponent(RigidBody)
    }

}