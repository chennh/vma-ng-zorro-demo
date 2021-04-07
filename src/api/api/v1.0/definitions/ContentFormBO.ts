import ContentViewLogBO from './ContentViewLogBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class ContentFormBO {

  /**
   * 审核备注
   */
    public auditRemark?: string

  /**
   * 提交表单后自动进入客户池 0不自动进入 1分享员工的客户池 2潜在的客户池 3待分配的客户池 数据库属性:int(11)
   */
    public autoAddCustomerPool!: number

  /**
   * 填写人数信息
   */
    public contentViewLogBo?: ContentViewLogBO

  /**
   * 创建时间
   */
    public createTime?: number

  /**
   * int(11)
   */
    public id?: number

  /**
   * 标签名称，颜色等信息
   */
    public labelInfo?: ParamOptionObjBO[]

  /**
   * 标签名称
   */
    public labelNames?: string[]

  /**
   * 表单标题
   */
    public name?: string

  /**
   * 创建人
   */
    public operatorId?: number

  /**
   * 创建人
   */
    public operatorName?: string

  /**
   * 说明
   */
    public remark?: string

  /**
   * 审核人
   */
    public staffName?: string

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status?: number

  /**
   * 审核时间
   */
    public updateTime?: number

  /**
   * 封面图 在微信转发中显示
   */
    public wechatThumbUrl?: string

}
