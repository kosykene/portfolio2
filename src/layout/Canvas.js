import React, { Component } from 'react'
import Circle from './circles'


class CanvasEle extends Component {
    componentDidMount() {
        const canvas = document.querySelector('canvas')
        const c = canvas.getContext('2d')
        canvas.width = canvas.parentElement.clientWidth//innerWidth
        canvas.height = canvas.parentElement.clientHeight

        let circles = [], cx
        function init(params) {
            for (let i = 0; i < 40; i++) {
                cx = i < 10 ? .65 * canvas.width - 10 : canvas.width - 20
                if (i % 2) circles.push(new Circle(cx, canvas.height - (i * 80), 15, c))
                console.log(circles)

            }
        }



        function animate() {
            requestAnimationFrame(animate)

            c.clearRect(0, 0, canvas.width, canvas.height)
            circles.forEach((i, index) => {
                i.update(canvas)

            })




        }
        init()
        //   animate()



    }
    render() {
        return <canvas id="canvas" height="500" width="300" style={{
            position: 'absolute',
            top: 0, left: 0
        }} />
    }
}

export default CanvasEle
