import { IPoint, IConfiguration } from './index'

export interface ICanvas {
  element: HTMLCanvasElement | string
  ctx: CanvasRenderingContext2D
  points: IPoint[]
  color: string
  backgroundColor: string
  config: IConfiguration
}
