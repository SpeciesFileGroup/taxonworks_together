import { ICoordinate } from './ICoordinate'

export interface IConfigurationPoints {
  color: string
  size: number
  total: number
  velocity: ICoordinate
}

export interface IConfiguration {
  backgroundColor: string
  distance?: number
  element: HTMLCanvasElement
  points: IConfigurationPoints
}
