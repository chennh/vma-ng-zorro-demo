import ContentStaffRelaBO from './ContentStaffRelaBO'


export default class MissionByCustomerPageBO {

  /**
   * 任务内容(json格式)
   */
    public attribute!: string

  /**
   * 任务开始时间
   */
    public beginTime!: number

  /**
   * 分享任务内容二维码
   */
    public contentStaffRelaBo!: ContentStaffRelaBO

  /**
   * 任务结束时间
   */
    public endTime!: number

  /**
   * 处理人姓名
   */
    public handleName!: string

  /**
   * 是否可以选择 1是0否
   */
    public isChoose!: number

  /**
   * 任务ID
   */
    public missionId!: number

  /**
   * 任务进度ID（客户任务ID）
   */
    public progressId!: number

  /**
   * 发送微信内容类型
   */
    public sendType!: number

  /**
   * 任务状态 1未开始 2进行中 3已完成 4已逾期 5已结束
   */
    public status!: number

  /**
   * 目标资源ID
   */
    public targetResourcesId!: number

  /**
   * 内容标题或文本内容
   */
    public textContent!: string

  /**
   * 任务类型
   */
    public type!: number

}
