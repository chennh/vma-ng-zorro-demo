

export default class PageViewLog {

  /**
   * 浏览时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 用户id 数据库属性:int(128)
   */
    public customerId!: number

  /**
   * 用户名称 数据库属性:varchar(128)
   */
    public customerName!: string

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 微小站id 数据库属性:int(128)
   */
    public miniSiteId!: number

  /**
   * 页码id 数据库属性:int(128)
   */
    public pageId!: number

  /**
   * 页面名称 数据库属性:varchar(128)
   */
    public pageName!: string

  /**
   * 分享人id 数据库属性:int(128)
   */
    public staffId!: number

  /**
   * 阅读记录id 数据库属性:int(128)
   */
    public viewLogId!: number

  /**
   * 阅读时长 数据库属性:int(128)
   */
    public viewTimes!: number

  /**
   * 访问随机数 数据库属性:varchar(128)
   */
    public viewUuid!: string

}
