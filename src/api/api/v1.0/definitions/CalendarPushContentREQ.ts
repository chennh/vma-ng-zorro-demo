import GroupCalendarContentREQ from './GroupCalendarContentREQ'


export default class CalendarPushContentREQ {

  /**
   * 内容名称
   */
    public contentName?: string

  /**
   * 发送内容
   */
    public groupCalendarContent?: GroupCalendarContentREQ[]

  /**
   * 日历ID
   */
    public id?: number

  /**
   * 推送计划ID 创建时不传
   */
    public pushId?: number

  /**
   * 发送时间
   */
    public sendTime?: number

}
