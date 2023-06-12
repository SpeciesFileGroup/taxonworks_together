import { ICoordinate } from './ICoordinate'

export interface IPoint {
  move(): void
  draw(): void
  getPosition(): ICoordinate
  setY(y: number): void
  setX(x: number): void
}
