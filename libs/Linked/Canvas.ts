import { IPoint } from './interfaces/IPoint'
import { IConfiguration, IConfigurationPoints, ICanvas } from './interfaces'
import { Point } from './Point'
import { drawLine } from './utils/line'
import { getDistance } from './utils/getDistance'

export class Canvas implements ICanvas {
  backgroundColor: string = '#000000'
  color: string = '#FFFFFF'
  ctx: CanvasRenderingContext2D
  distance: number = 100
  element: HTMLCanvasElement
  points: IPoint[] = []
  config: IConfiguration
  requestAnimationId: number = 0
  isPlaying: boolean = true

  constructor(config: IConfiguration) {
    const { element, backgroundColor, points } = config
    const el: HTMLCanvasElement | null = this.searchElement(element)
    const ctx: unknown = el?.getContext('2d')

    if (!el || !(el instanceof HTMLCanvasElement)) {
      throw new Error('Failed to get canvas element')
    }

    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context')
    }

    this.config = config
    this.backgroundColor = backgroundColor
    this.color = config.points.color
    this.distance = config.distance || this.distance
    this.element = element
    this.ctx = ctx

    window.addEventListener('resize', this.resizeCanvas.bind(this))

    this.resizeCanvas()
    this.fillCanvas(points)
    this.draw()
  }

  private searchElement(
    el: string | HTMLCanvasElement
  ): HTMLCanvasElement | null {
    if (el instanceof HTMLCanvasElement) {
      return el
    }

    return document.querySelector(el)
  }

  private fillCanvas({ total, velocity, color, size }: IConfigurationPoints) {
    const { height, width } = this.getCanvasSize()

    this.points = Array.from(
      { length: total },
      () =>
        new Point({
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          color,
          ctx: this.ctx,
          size,
          velocity
        })
    )
  }

  private resizeCanvas() {
    const { height, width } = this.getCanvasSize()

    this.ctx.canvas.width = width
    this.ctx.canvas.height = height

    this.fillCanvas(this.config.points)
  }

  public stop() {
    this.isPlaying = false
  }

  public play() {
    if (!this.isPlaying) {
      this.isPlaying = true
      this.draw()
    }
  }

  private getCanvasSize(): { width: number; height: number } {
    return this.element.getBoundingClientRect()
  }

  private draw() {
    const canvasSize = this.getCanvasSize()

    this.ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)
    this.ctx.fillStyle = this.backgroundColor
    this.ctx.fillRect(0, 0, canvasSize.width, canvasSize.height)

    this.points.forEach((point: IPoint, index) => {
      const { x, y } = point.getPosition()

      if (x > canvasSize.width) {
        point.setX(0)
      }

      if (y > canvasSize.height) {
        point.setY(0)
      }

      if (y < 0) {
        point.setY(canvasSize.height)
      }

      if (x < 0) {
        point.setX(canvasSize.width)
      }

      point.draw()
      point.move()

      for (let i = index + 1; i < this.points.length; i++) {
        const pos1 = point.getPosition()
        const pos2 = this.points[i].getPosition()

        if (getDistance(pos1.x, pos1.y, pos2.x, pos2.y) < this.distance) {
          drawLine(this.ctx, pos1, pos2, { color: this.config.lineColor })
        }
      }
    })
    if (this.isPlaying) {
      window.requestAnimationFrame(() => this.draw())
    }
  }
}
