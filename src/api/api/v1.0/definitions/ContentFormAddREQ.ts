import CustomerParamDTO from './CustomerParamDTO'
import ContentFormFieldsBO from './ContentFormFieldsBO'
import ContentFieldsBO from './ContentFieldsBO'


export default class ContentFormAddREQ {

  /**
   * 提交表单后自动进入客户池 0不自动进入 1分享员工的客户池 2潜在的客户池 3待分配的客户池 数据库属性:int(11)
   */
    public autoAddCustomerPool!: number

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
   * 字段集合 fieldsList转json,  数据库属性:varchar(128)
   */
    public fields!: string

  /**
   * 字段集合
   */
    public fieldsList?: ContentFormFieldsBO[]

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 标签id 多个用逗号分隔 数据库属性:varchar(128)
   */
    public labels?: string

  /**
   * 提交成功页面信息 文章/文件id,排序等信息 数据库属性:varchar(128)
   */
    public moreContents?: string

  /**
   * 提交成功页面
   */
    public moreContentsList?: ContentFieldsBO[]

  /**
   * 表单标题 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 说明 数据库属性:varchar(128)
   */
    public remark?: string

  /**
   * 是否同步到企业表单 1是 0否 数据库属性:int(11)
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
