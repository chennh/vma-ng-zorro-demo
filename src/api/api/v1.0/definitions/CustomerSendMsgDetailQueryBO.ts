

export default class CustomerSendMsgDetailQueryBO {

  /**
   * 客户头像
   */
    public customerHeadIcon!: string

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 发送状态 0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-接收上限
   */
    public sendStatus!: number

  /**
   * 员工名称
   */
    public staffName!: string

}
