import type { ISpeaker } from './ISpeaker'

export interface IScheduleItem {
  start: string
  title: string
  description: string
  speakers: Array<ISpeaker | string>
  talk?: string
  highlight?: boolean
  type?: string
  video?: string[]
}
