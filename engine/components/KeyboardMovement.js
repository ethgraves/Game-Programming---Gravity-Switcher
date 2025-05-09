class KeyboardMovement extends Component {
    playerSpeed
    elapsedTime
    constructor(playerSpeed) {
        super()
        this.playerSpeed = playerSpeed
    }
    start() {
        this.elapsedTime = 0
    }
    update() {
        if (Input.keysdown.includes("ArrowUp")) {
            this.transform.y -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowDown")) {
            this.transform.y += this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("ArrowLeft") || Input.keysdown.includes("A")) {
            this.transform.x -= this.playerSpeed * Time.deltaTime
        }
        if (Input.keysdown.includes("Right") || Input.keysdown.includes("D")) {
            this.transform.x += this.playerSpeed * Time.deltaTime
        }
    }
}