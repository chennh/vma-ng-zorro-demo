

export default class GroupLabelCreateInfoDetailCustomerParam {

  /**
   * 标签建群ID
   */
    public groupLabelCreateId?: number

  /**
   * 客户名称
   */
    public customerName?: string

  /**
   * 邀请者(员工)名称
   */
    public staffName?: string

  /**
   * 是否入群 0否 1是
   */
    public isJoinChat?: number

  /**
   * 群ID
   */
    public chatId?: string

  /**
   * 邀请状态 0未邀请 1已邀请 2客户已不是好友 3接受已达上限
   */
    public inviteStatus?: number

}
