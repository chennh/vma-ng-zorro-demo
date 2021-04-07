

export default class ActivityBargainCoursesAddREQ {

  /**
   * 砍价时间（分钟） 数据库属性:int(11)
   */
    public bargainTime!: number

  /**
   * 购买链接 数据库属性:varchar(255)
   */
    public buyLink?: string

  /**
   * 页面内容 数据库属性:varchar(255)
   */
    public content?: string

  /**
   * 课程首图 数据库属性:varchar(255)
   */
    public courseImage!: string

  /**
   * 课程原价
   */
    public courseOriginalPrice!: number

  /**
   * 活动结束时间 数据库属性:datetime
   */
    public endTime!: number

  /**
   * from where 数据库属性:varchar(255)
   */
    public fromWhere?: string

  /**
   * 助力砍价礼品 数据库属性:varchar(255)
   */
    public gift!: string

  /**
   * 礼品图片 数据库属性:varchar(255)
   */
    public giftImage!: string

  /**
   * 课程介绍 数据库属性:varchar(255)
   */
    public introduce?: string

  /**
   * 活动课程名称 数据库属性:varchar(255)
   */
    public name!: string

  /**
   * 砍成需要人数 数据库属性:int(11)
   */
    public needPeople!: number

  /**
   * 活动权限 数据库属性:varchar(255)
   */
    public power?: string

  /**
   * 参与限制 1无限制 2只允许新客户助力砍价
   */
    public restrict?: number

  /**
   * 活动规则 数据库属性:varchar(255)
   */
    public rule!: string

  /**
   * 分享封面图片 数据库属性:varchar(255)
   */
    public shareImage!: string

  /**
   * 分享摘要 数据库属性:varchar(255)
   */
    public shareSummary!: string

  /**
   * 分享标题 数据库属性:varchar(255)
   */
    public shareTitle!: string

  /**
   * 详情页跳转 1 第三方应用  2跳转页面
   */
    public skip?: number

  /**
   * 排序 数据库属性:int(11)
   */
    public sort?: number

  /**
   * 活动开始时间 数据库属性:datetime
   */
    public startTime!: number

  /**
   * 课程砍价成功次数 数据库属性:int(11)
   */
    public successNum?: number

  /**
   * 参与活动自动打标签 数据库属性:int(11) true false
   */
    public tag?: boolean

  /**
   * 标签id 数据库属性:varchar(255)
   */
    public tagIds?: string

  /**
   * url地址 数据库属性:varchar(255)
   */
    public url?: string

}
