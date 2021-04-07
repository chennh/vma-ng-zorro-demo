

export default class CustomerSendMsgInfoDetailCustomerParam {

  /**
   * 客户群发ID
   */
    public customerSendMsgId!: number

  /**
   * 客户名称
   */
    public customerName?: string

  /**
   * 发送状态 0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-接收上限
   */
    public sendStatus?: number

}
