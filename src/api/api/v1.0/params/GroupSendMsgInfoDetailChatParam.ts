

export default class GroupSendMsgInfoDetailChatParam {

  /**
   * 群发消息ID
   */
    public groupSendMsgId?: number

  /**
   * 员工ID
   */
    public staffId?: number

  /**
   * 群聊名称
   */
    public chatName?: string

  /**
   * 发送状态 0未发送 -1发送失败 1发送成功
   */
    public sendStatus?: number

}
