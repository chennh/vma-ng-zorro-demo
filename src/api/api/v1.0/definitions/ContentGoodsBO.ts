import ContentViewLogBO from './ContentViewLogBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class ContentGoodsBO {

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public auditStatus!: number

  /**
   * 我的 浏览次数
   */
    public contentViewLogBo!: ContentViewLogBO

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 自定义说明
   */
    public customerDesc!: string

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
   * 商品名称
   */
    public name!: string

  /**
   * 员工id
   */
    public operatorName!: string

  /**
   * 是否免费 1付费 2免费 字段id,
   */
    public payType!: number

  /**
   * 固定价格
   */
    public price!: number

  /**
   * 价格区间 最大价格
   */
    public priceRangeMax!: number

  /**
   * 价格区间 最小价格
   */
    public priceRangeMin!: number

  /**
   * 价格类型 1固定价格 2区间间隔 3自定义说明
   */
    public priceType!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 是否企业文章库 1是 0否
   */
    public shared!: number

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 状态 1上架 0下架
   */
    public status!: number

  /**
   * 库存
   */
    public stockNum!: number

  /**
   * 审核时间
   */
    public updateTime!: number

  /**
   * 封面图 在微信转发中显示
   */
    public wechatThumbUrl!: string

}
