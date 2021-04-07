

export default class MissionPageBO {

  /**
   * 任务内容(json格式)
   */
    public attribute!: string

  /**
   * 任务开始时间
   */
    public beginTime!: number

  /**
   * 创建类型 1我创建的 2我待办的
   */
    public createType!: number

  /**
   * 任务结束时间
   */
    public endTime!: number

  /**
   * 已完成任务数
   */
    public fishNum!: number

  /**
   * 任务ID
   */
    public id!: number

  /**
   * 处理人名称， 目标客户名称
   */
    public nicks!: string[]

  /**
   * 发送微信内容类型
   */
    public sendType!: number

  /**
   * 目标资源ID
   */
    public targetResourcesId!: number

  /**
   * 内容标题或文本内容
   */
    public textContent!: string

  /**
   * 总任务数
   */
    public total!: number

  /**
   * 任务类型
   */
    public type!: number

}
