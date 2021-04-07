

export default class ContentNoticeLogDTO {

  /**
   * 业务id 加入企业的记录id/客户id/商品id
   */
    public contentId?: number

  /**
   * 通知内容
   */
    public message?: string

  /**
   * 员工id
   */
    public staffId?: number

  /**
   * 通知类型 1申请加入企业 2客户需要跟进 3客户回到公海 4客户需要协助 5商品库存不足警告 6合并通知 7流失提醒 8删人提醒....
   */
    public type?: number

}
