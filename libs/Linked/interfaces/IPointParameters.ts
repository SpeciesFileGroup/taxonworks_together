import { ICoordinate } from './ICoordinate'

export interface IPointParameters {
  x: number
  y: number
  size: number
  color: string
  velocity: ICoordinate
  ctx: CanvasRenderingContext2D
}
