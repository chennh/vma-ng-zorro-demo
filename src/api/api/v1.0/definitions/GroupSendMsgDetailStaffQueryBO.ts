

export default class GroupSendMsgDetailStaffQueryBO {

  /**
   * 未发送群聊数
   */
    public groupChatNotSendNum!: number

  /**
   * 已发送群聊数
   */
    public groupChatSendNum!: number

  /**
   * 本次群发群聊总数
   */
    public groupChatTotalNum!: number

  /**
   * -
   */
    public id!: number

  /**
   * 发送状态 0未发送 1已发送
   */
    public sendStatus!: number

  /**
   * 确认发送时间
   */
    public sendTime!: number

  /**
   * 员工(群主)名称
   */
    public staffName!: string

}
