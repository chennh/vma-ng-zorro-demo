

export default class NoticeLogBO {

  /**
   * 业务id 加入企业的记录id/客户id/商品id
   */
    public contentId!: number

  /**
   * 通知时间
   */
    public createTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 通知内容
   */
    public message!: string

  /**
   * 状态 1已读 0未读
   */
    public status!: number

  /**
   * 通知类型 1申请加入企业 2客户需要跟进 3客户回到公海 4客户需要协助 5商品库存不足警告 ....
   */
    public type!: number

}
