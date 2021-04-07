

export default class ChatStaffBO {

  /**
   * 头像
   */
    public headIcon!: string

  /**
   * 是否开启会话留存
   */
    public isOpenChat!: boolean

  /**
   * 员工ID
   */
    public staffId!: number

  /**
   * 员工名称
   */
    public staffName!: string

  /**
   * 企业微信名称
   */
    public wxName!: string

  /**
   * 微信状态 1=已激活，2=已禁用，4=未激活，5=退出企业
   */
    public wxStatus!: string

  /**
   * 企业微信Id
   */
    public wxUserId!: string

}
