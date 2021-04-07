import ReplyContentDTO from './ReplyContentDTO'


export default class CustomerSendMsgInfoPageBO {

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
   * 未送达客户数量
   */
    public notReceiveNum!: number

  /**
   * 未发送员工数量
   */
    public notSendNum!: number

  /**
   * 送达客户数量
   */
    public receiveNum!: number

  /**
   * 送达客户总数量
   */
    public receiveTotalNum!: number

  /**
   * 群发内容
   */
    public replyContentDto!: ReplyContentDTO

  /**
   * 已发送员工数量
   */
    public sendNum!: number

  /**
   * 发送状态 -1发送失败 0未发送 1发送成功
   */
    public sendStatus!: number

  /**
   * 发送时间
   */
    public sendTime!: number

  /**
   * 发送员工总数量
   */
    public sendTotalNum!: number

  /**
   * 发送类型 1立即发送 2定时发送
   */
    public sendType!: number

}
