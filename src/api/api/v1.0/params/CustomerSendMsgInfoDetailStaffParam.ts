

export default class CustomerSendMsgInfoDetailStaffParam {

  /**
   * 客户群发Id
   */
    public customerSendMsgId!: number

  /**
   * 发送状态 0未发送 1已发送 -1发送失败
   */
    public sendStatus?: number

  /**
   * 员工名称
   */
    public staffName?: string

}
