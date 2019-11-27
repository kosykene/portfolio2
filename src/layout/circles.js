import { randomIntFromRange } from './utils'
export default class Circle {
    constructor(x, y, radius, c) {
        this.x = x
        this.y = y
        this.radius = radius;
        this.velocity = 8
        this.color = '#ccdcf5'
        this.ctx = c
    }

    draw() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        // this.radius>3? this.color=m1.update():null
        this.ctx.fill()
        this.ctx.closePath()
        this.ctx.restore()
    }
    update(canvas) {
        this.draw()
        if (this.y + this.radius + this.velocity > canvas.height + 15) {
            this.y = 15

        }


        this.y += this.velocity
    }
}

