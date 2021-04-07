

export default class GroupWarningDetailRecordParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 群告警ID
   */
    public groupWarningId!: number

  /**
   * 群名称
   */
    public name?: string

  /**
   * 员工企业微信ID
   */
    public ownerWxId?: string

  /**
   * 行为提醒 image:发送带二维码图片 link:发送链接分享 weapp:发送小程序 card:发送名片 text:文本
   */
    public behaviorType?: string

  /**
   * 触发关键字
   */
    public keyWord?: string

  /**
   * 消息时间(触发时间)开始时间
   */
    public startMsgTime?: number

  /**
   * 消息时间(触发时间)结束时间
   */
    public endMsgTime?: number

}
