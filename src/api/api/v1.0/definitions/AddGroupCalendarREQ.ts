import CalendarPushContentREQ from './CalendarPushContentREQ'


export default class AddGroupCalendarREQ {

  /**
   * 日历名称
   */
    public calendarName?: string

  /**
   * 推送内容
   */
    public calendarPushContent?: CalendarPushContentREQ[]

  /**
   * -
   */
    public id?: number

}
