

export default class GroupSendMsgDetailChatQueryBO {

  /**
   * 群创建时间
   */
    public chatCreateTime!: number

  /**
   * 群聊ID
   */
    public chatId!: string

  /**
   * 群聊名称
   */
    public chatName!: string

  /**
   * 群聊ID主键
   */
    public groupChatId!: number

  /**
   * -
   */
    public id!: number

  /**
   * 群主名称
   */
    public ownerName!: string

  /**
   * 发送状态 0未发送 -1发送失败 1发送成功
   */
    public sendStatus!: number

  /**
   * 发送时间
   */
    public sendTime!: number

  /**
   * 员工ID
   */
    public staffId!: number

}
