import CustomerParamDTO from './CustomerParamDTO'


export default class ContentLinkUpdateREQ {

  /**
   * 阅读链接是否自动打标签 1是 0否 数据库属性:int(11)
   */
    public autoTag!: number

  /**
   * 阅读链接n秒后自动打标签 数据库属性:int(11)
   */
    public autoTagReadSecond?: number

  /**
   * 标签列表
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
   * 标签id 多个用逗号分隔 数据库属性:varchar(256)
   */
    public labels?: string

  /**
   * 链接地址 数据库属性:varchar(256)
   */
    public linkUrl!: string

  /**
   * 链接标题 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 链接说明 数据库属性:varchar(128)
   */
    public remark?: string

  /**
   * 是否同步到企业链接库 1是 0否 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 跳转类型 1永久跳转 2内部跳转
   */
    public type?: number

  /**
   * 摘要 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatText!: string

  /**
   * 封面图 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatThumbUrl!: string

}
