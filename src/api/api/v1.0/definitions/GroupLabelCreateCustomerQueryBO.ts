

export default class GroupLabelCreateCustomerQueryBO {

  /**
   * 群聊名称
   */
    public chatName!: string

  /**
   * 客户ID
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 邀请状态 0未邀请 1已邀请 2客户已不是好友 3接受已达上限
   */
    public inviteStatus!: number

  /**
   * 是否入群 0否 1是
   */
    public isJoinChat!: number

  /**
   * 邀请者(员工)名称
   */
    public staffName!: string

}
