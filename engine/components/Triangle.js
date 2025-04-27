class Triangle extends Component {
    constructor(fillStyle, strokeStyle, lineWidth){
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
    }

    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth

        ctx.moveTo(this.transform.x, this.transform.y)
        ctx.moveTo(this.transform.x + 30, this.transform.y)
        ctx.moveTo(this.transform.x, this.transform.y+30)
        ctx.moveTo(this.transform.x -30, this.transform.y)
        ctx.moveTo(this.transform.x, this.transform.y-30)

        ctx.closePath()


        ctx.stroke()
    }
}