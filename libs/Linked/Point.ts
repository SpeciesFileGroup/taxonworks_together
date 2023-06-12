import { IPoint, IPointParameters, ICoordinate } from './interfaces'

class Point implements IPoint {
  private x: number
  private y: number
  private color: string
  private ctx: CanvasRenderingContext2D
  private size: number
  private velocity: ICoordinate

  constructor(parameters: IPointParameters) {
    this.x = parameters.x
    this.y = parameters.y
    this.size = parameters.size
    this.ctx = parameters.ctx
    this.color = parameters.color
    this.velocity = {
      x: this.getRandomVelocity(parameters.velocity.x),
      y: this.getRandomVelocity(parameters.velocity.y)
    }
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  move() {
    this.x += this.velocity.x
    this.y += this.velocity.y
  }

  setX(x: number) {
    this.x = x
  }

  setY(y: number) {
    this.y = y
  }

  getRandomVelocity(n: number) {
    return Math.ceil(Math.random() * n) * (Math.round(Math.random()) ? 1 : -1)
  }

  getPosition(): ICoordinate {
    return {
      x: this.x,
      y: this.y
    }
  }
}

export { Point }
