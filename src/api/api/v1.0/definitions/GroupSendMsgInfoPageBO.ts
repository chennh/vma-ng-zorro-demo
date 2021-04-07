import ReplyContentDTO from './ReplyContentDTO'


export default class GroupSendMsgInfoPageBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 错误信息
   */
    public errorMsg!: string

  /**
   * -
   */
    public id!: number

  /**
   * 群发名称
   */
    public name!: string

  /**
   * 未送达群聊数量
   */
    public notSendChatGroupNum!: number

  /**
   * 群发内容
   */
    public replyContentDto!: ReplyContentDTO

  /**
   * 已送达群聊数量
   */
    public sendChatGroupNum!: number

  /**
   * 需要送达群聊总数
   */
    public sendChatGroupTotalNum!: number

  /**
   * 发送状态 0未发送 1已发送
   */
    public sendStatus!: number

  /**
   * 发送时间
   */
    public sendTime!: number

  /**
   * 群发类型 1立即发送 2定时发送
   */
    public sendType!: number

  /**
   * 未发送群主(员工)数量
   */
    public staffNotSendNum!: number

  /**
   * 已发送群主(员工)数量
   */
    public staffSendNum!: number

  /**
   * 需要发送群主总数
   */
    public staffSendTotalNum!: number

}
