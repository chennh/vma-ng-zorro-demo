

export default class CustomerInfoFollowListBO {

  /**
   * 外部联系人所在企业的简称
   */
    public corpName!: string

  /**
   * 冗余字段-客户头像 数据库属性:varchar(30)
   */
    public customerAvator!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 好友类型 1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
    public userType!: number

  /**
   * 微信添加好友时间 数据库属性:datetime
   */
    public wxAddTime!: number

  /**
   * 微信昵称
   */
    public wxNick!: string

  /**
   * wxUserId 数据库属性:varchar(50)
   */
    public wxUserId!: string

}
