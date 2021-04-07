

export default class ContentShareFissionBO {

  /**
   * 邀请人id 数据库属性:int(128)
   */
    public customerId!: number

  /**
   * 邀请人名称
   */
    public customerName!: string

  /**
   * -1删除 0未知 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType!: number

  /**
   * 领取礼品数
   */
    public receiveCount!: number

  /**
   * 分享员工Id
   */
    public staffId!: number

  /**
   * 分享员工名称
   */
    public staffName!: string

  /**
   * 已完成的任务
   */
    public taskName!: string

}
