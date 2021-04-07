

export default class TaskActivityCustomerRelatePageBO {

  /**
   * 活动ID
   */
    public activityId!: number

  /**
   * 完成时间
   */
    public completeTime!: number

  /**
   * 参加活动时间
   */
    public createTime!: number

  /**
   * 客户ID
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 是否领取奖品 0否 1是
   */
    public isReceive!: number

  /**
   * 邀请助力好友数
   */
    public nowNum!: number

  /**
   * 活动状态 -1未完成 0进行中 1完成
   */
    public status!: number

}
