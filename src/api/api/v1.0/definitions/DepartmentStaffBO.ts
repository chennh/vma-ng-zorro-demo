

export default class DepartmentStaffBO {

  /**
   * 头像
   */
    public headIcon!: string

  /**
   * 是否拥有群聊
   */
    public isChat!: boolean

  /**
   * 是否是部门负责人
   */
    public isHead!: number

  /**
   * 是否开通会话留存功能 true:开通  false:未开通
   */
    public isOpenChat!: boolean

  /**
   * 员工ID
   */
    public staffId!: number

  /**
   * 姓名
   */
    public staffName!: string

  /**
   * 企业微信员工状态 1=已激活，2=已禁用，4=未激活，5=退出企业
   */
    public wxStatus!: string

  /**
   * 企业微信员工ID
   */
    public wxUserId!: string

}
