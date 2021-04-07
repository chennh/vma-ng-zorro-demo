import CustomerParamDTO from './CustomerParamDTO'


export default class ContentArticlesUpdateREQ {

  /**
   * 阅读文章是否自动打标签 1是 0否 数据库属性:int(11)
   */
    public autoTag!: number

  /**
   * 阅读文章n秒后自动打标签 数据库属性:int(11)
   */
    public autoTagReadSecond?: number

  /**
   * 文字内容 数据库属性:text
   */
    public body!: string

  /**
   * 标签信息
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * -
   */
    public egroupId?: number

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 标签id 多个用逗号分隔 数据库属性:varchar(128)
   */
    public labels?: string

  /**
   * 显示时间 数据库属性:datetime
   */
    public publishTime!: number

  /**
   * 是否同步到企业文章库 1是 0否 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 是否显示时间 1是 0否 数据库属性:datetime
   */
    public showPublishTime!: number

  /**
   * 来源/作者 数据库属性:varchar(128)
   */
    public source!: string

  /**
   * 标题 数据库属性:varchar(128)
   */
    public title!: string

  /**
   * 微信公众号原连接 数据库属性:varchar(128)
   */
    public wechatOriginUrl!: string

  /**
   * 摘要 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatText!: string

  /**
   * 封面图 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatThumbUrl!: string

}
