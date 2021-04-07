import PushPlansBO from './PushPlansBO'


export default class GroupCalendarDetailBO {

  /**
   * 日历名称
   */
    public calendarName!: string

  /**
   * -
   */
    public groupNum!: number

  /**
   * -
   */
    public id!: number

  /**
   * 推送计划
   */
    public pushPlan!: PushPlansBO[]

}
