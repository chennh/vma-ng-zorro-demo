

export default class CustomerSendMsgStaffQueryBO {

  /**
   * -
   */
    public id!: number

  /**
   * 已经发送客户数
   */
    public sendNum!: number

  /**
   * 发送状态 0未发送 1已发送 -1发送失败
   */
    public sendStatus!: number

  /**
   * 需要发送客户数
   */
    public sendTotalNum!: number

  /**
   * 员工头像
   */
    public staffHeadIcon!: string

  /**
   * 员工Id
   */
    public staffId!: string

  /**
   * 员工名称
   */
    public staffName!: string

}
