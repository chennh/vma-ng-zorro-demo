

export default class ContentactiviteInviteParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 邀请有礼id
   */
    public id!: number

  /**
   * 类型 1我的分享 2所有分享
   */
    public type!: number

  /**
   * 员工id
   */
    public staffId?: number

  /**
   * 邀请人id
   */
    public inviteCustomerId?: number

}
