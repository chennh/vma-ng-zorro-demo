

export default class FriendInfoBO {

  /**
   * 外部联系人所在企业的简称
   */
    public corpName!: string

  /**
   * 客户头像 数据库属性:varchar(30)
   */
    public customerAvator!: string

  /**
   * 客户姓名
   */
    public customerName!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 是否开通会话留存功能
   */
    public isOpenChat!: boolean

  /**
   * 好友类型 1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
    public userType!: number

  /**
   * wxUserId 数据库属性:varchar(50)
   */
    public wxUserId!: string

}
