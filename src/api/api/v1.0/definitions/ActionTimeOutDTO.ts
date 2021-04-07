import ActionTime from './ActionTime'


export default class ActionTimeOutDTO {

  /**
   * 时间范围
   */
    public timeList?: ActionTime[]

  /**
   * 超时时间,单位:秒
   */
    public timeout?: number

  /**
   * 监控的星期 星期天-星期六 1-7
   */
    public weekSets?: number[]

}
