import CustomerParamDTO from './CustomerParamDTO'


export default class ContentFilesAddREQ {

  /**
   * 阅读文章是否自动打标签 1是 0否 数据库属性:int(11)
   */
    public autoTag!: number

  /**
   * 阅读文章n秒后自动打标签 数据库属性:int(11)
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
   * 文件图片数据库属性:varchar(128)
   */
    public filesImg?: string

  /**
   * 文件名称 数据库属性:varchar(128)
   */
    public filesName!: string

  /**
   * 文件类型 1.excel 2.pdf 3.word 4.ppt 数据库属性:varchar(128)
   */
    public filesType!: string

  /**
   * 文件url 数据库属性:varchar(128)
   */
    public filesUrl!: string

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 标签id 多个用逗号分隔 数据库属性:varchar(128)
   */
    public labels?: string

  /**
   * 是否同步到企业文章库 1是 0否 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 摘要 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatText?: string

  /**
   * 封面图 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatThumbUrl?: string

}
