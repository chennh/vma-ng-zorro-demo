

export default class ViewLogBO {

  /**
   * 内容id 数据库属性:int(128)
   */
    public contentId!: number

  /**
   * 内容标题
   */
    public contentText!: string

  /**
   * 阅读时长 数据库属性:int(128)
   */
    public contentType!: number

  /**
   * 通知时间
   */
    public createTime!: number

  /**
   * 冗余字段-客户头像 数据库属性:varchar(30)
   */
    public customerAvator!: string

  /**
   * 客户id
   */
    public customerId!: number

  /**
   * 1潜在 2 待分配  3跟进中 4公海 数据库属性:int(1)
   */
    public customerType!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 状态 1已读 0未读 数据库属性:int(255)
   */
    public status!: number

  /**
   * 阅读类型 1文章2文件3表单4商品5名片6微小站  数据库属性:int(128)
   */
    public type!: number

  /**
   * 阅读时长 数据库属性:int(128)
   */
    public viewTimes!: number

  /**
   * 微信昵称 数据库属性:varchar(30)
   */
    public wxNick!: string

}
