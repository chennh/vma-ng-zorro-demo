

export default class ContentViewLogRankPageBO {

  /**
   * 内容id 数据库属性:int(128)
   */
    public contentId!: number

  /**
   * 所有 领取/填写次数
   */
    public optTime!: number

  /**
   * 分享人id 数据库属性:int(128)
   */
    public staffId!: number

  /**
   * 分享人名称
   */
    public staffName!: string

  /**
   * 阅读类型 1文章2文件3表单4商品5名片6微小站  数据库属性:int(128)
   */
    public type!: number

  /**
   * 所有 阅读/浏览次数
   */
    public viewCount!: number

  /**
   * 人均浏览页面数
   */
    public viewPageCount!: number

  /**
   * 所有 阅读/浏览人数
   */
    public viewPeople!: number

}
