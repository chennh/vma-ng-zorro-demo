

export default class WeworkchatGetListByWxFollowerIdParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 员工id
   */
    public staffId?: number

  /**
   * 员工姓名
   */
    public staffName?: string

  /**
   * 好友类型 1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
    public userType?: number

}
