import React, { Component } from 'react';
import Context from '../context/context.js'
import styled from 'styled-components'

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      width: null,
      height: null,
      x: 100,
      y: 400,
      radius: 50,
      spawnTime:0
    }
  }

  componentDidMount() {
    let ctx = this.canvas.getContext('2d')
    this.context.socket.on('cords', (cords) => {
      console.log(cords);
      this.setState({x:cords[0],y:cords[1]},()=> {
        setTimeout(()=> {
          this.drawCircle(ctx, this.state.x, this.state.y)
        }, 3000)
      })
    })
    this.canvas.addEventListener('click',(e)=> {
      this.checkChords(e)
    })
  }

  drawCircle(ctx,x,y) {
    ctx.fillStyle = '#ffffff'
    ctx.beginPath();
    ctx.arc(x, y, this.state.radius, 0, 2 * Math.PI);
    ctx.fill();
    this.setState({spawnTime: Date.now()})
  }

  drawBackground(ctx) {
    ctx.fillStyle = '#263238'
    ctx.fillRect(0,0,this.props.width,this.props.height)
  }

  checkChords(e)  {
    let a = e.offsetX - this.state.x
    let b = e.offsetY - this.state.y
    let c = Math.floor(Math.sqrt((a * a) + (b * b)))
    if(c < this.state.radius) {
      let time = Date.now() - this.state.spawnTime
      this.context.socket.emit('clicked', {id: this.props.gameId, time})
      this.drawBackground(this.canvas.getContext('2d'))
    }
  }

  render() {
    return (
      <CanvasContainer width={this.props.width} height={this.props.height}>
        <canvas ref={(canvas) => this.canvas = canvas} width={this.props.width} height={this.props.height}></canvas>
      </CanvasContainer>
    )
  }

}

export default Canvas
Canvas.contextType = Context

const CanvasContainer = styled.div`
  margin: 8em;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 2em;
  border-radius: 2em;
  background-color: #263238;
`
