import ContentViewLogBO from './ContentViewLogBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class ContentArticlesBO {

  /**
   * 阅读量
   */
    public contentViewLogBo!: ContentViewLogBO

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 标签名称，颜色等信息
   */
    public labelInfo!: ParamOptionObjBO[]

  /**
   * 标签名称
   */
    public labelNames!: string[]

  /**
   * 标签id 多个用逗号分隔
   */
    public labels!: string

  /**
   * 创建人
   */
    public operatorId!: number

  /**
   * 创建人
   */
    public operatorName!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status!: number

  /**
   * 标题
   */
    public title!: string

  /**
   * 审核时间
   */
    public updateTime!: number

  /**
   * 封面图 在微信转发中显示
   */
    public wechatThumbUrl!: string

}
