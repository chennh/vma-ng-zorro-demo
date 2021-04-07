import ContentViewLogBO from './ContentViewLogBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class ContentLinkBO {

  /**
   * 审核备注
   */
    public auditRemark!: string

  /**
   * 我的 浏览次数
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
   * 链接标题
   */
    public name!: string

  /**
   * 创建者人
   */
    public operatorName!: string

  /**
   * 连接描述
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
   * 审核时间
   */
    public updateTime!: number

}
