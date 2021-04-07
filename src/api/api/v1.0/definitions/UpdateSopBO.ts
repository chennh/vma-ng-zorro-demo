import PushContentBO from './PushContentBO'


export default class UpdateSopBO {

  /**
   * 内容名称
   */
    public contentName!: string

  /**
   * 周期发送的时间
   */
    public cycleSendTime!: number

  /**
   * 延迟小时数
   */
    public delayHour!: number

  /**
   * 延迟分钟数
   */
    public delayMinute!: number

  /**
   * sopID
   */
    public id!: number

  /**
   * 是否过期 1是 0否
   */
    public isOverdue!: number

  /**
   * 推送内容
   */
    public pushContents!: PushContentBO[]

  /**
   * 发送类型1单次提醒2周期提醒3新人提醒
   */
    public sendType!: number

  /**
   * 单次发送的时间
   */
    public singleSendTime!: number

  /**
   * 周期发送的星期，多个用逗号分割
   */
    public week!: string

}
