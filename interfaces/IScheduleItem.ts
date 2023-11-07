import { ISpeaker } from './ISpeaker'

export interface IScheduleItem {
  start: string
  title: string
  description: string
  speakers: Array<ISpeaker | string>
  highlight?: boolean
  type?: string
  talk?: string
}
