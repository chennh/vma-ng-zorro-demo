import CustomerParamDTO from './CustomerParamDTO'
import ContentFormFieldsBO from './ContentFormFieldsBO'
import ContentGoodsLiveDTO from './ContentGoodsLiveDTO'


export default class ContentGoodsUpdateREQ {

  /**
   * 领取后自动进入客户池 0不自动进入 1分享员工的客户池 2潜在的客户池 3待分配的客户池
   */
    public autoAddCustomerPool?: number

  /**
   * 阅读文章是否自动打标签 1是 0否 数据库属性:int(11)
   */
    public autoTag?: number

  /**
   * 阅读文章n秒后自动打标签 数据库属性:int(11)
   */
    public autoTagReadSecond?: number

  /**
   * 文字内容 数据库属性:text
   */
    public body!: string

  /**
   * 引导按钮
   */
    public bootButton?: string

  /**
   * 引导语
   */
    public bootMessage?: string

  /**
   * 引导加微信 1开启 0关闭
   */
    public bootWeChat?: number

  /**
   * 自定义说明 数据库属性:varchar(128)
   */
    public customerDesc?: string

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
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 首图url 多个图片用逗号分隔 数据库属性:varchar(128)
   */
    public imageUrls!: string

  /**
   * 标签id 多个用逗号分隔 数据库属性:varchar(128)
   */
    public labels!: string

  /**
   * 划线价 数据库属性:decimal(10,2)
   */
    public linePrice!: number

  /**
   * 活码信息
   */
    public liveCodeInfo?: ContentGoodsLiveDTO

  /**
   * 商品名称 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 是否免费 1付费 2免费 字段id,  数据库属性:varchar(128)
   */
    public payType!: number

  /**
   * 固定价格 数据库属性:decimal(10,2)
   */
    public price?: number

  /**
   * 价格区间 最大价格 数据库属性:decimal(10,2)
   */
    public priceRangeMax?: number

  /**
   * 价格区间 最小价格 数据库属性:decimal(10,2)
   */
    public priceRangeMin?: number

  /**
   * 价格类型 1固定价格 2区间间隔 3自定义说明 数据库属性:varchar(128)
   */
    public priceType!: string

  /**
   * 二维码信息 qrCodeType=1 liveCodeInfo转json qrCodeType=2 自定义图片地址
   */
    public qrCodeInfo?: string

  /**
   * 二维码类型  1企业活码 2自定义
   */
    public qrCodeType?: number

  /**
   * 领取商品是否自动打标签 1是 0否 数据库属性:varchar(255)
   */
    public receiveAutoTag?: number

  /**
   * 标签列表
   */
    public receiveCustomerParamDtos?: CustomerParamDTO[]

  /**
   * 领取商品自动打标签 标签id 多个用逗号分隔
   */
    public receiveLabels?: string

  /**
   * 是否同步到企业文章库 1是 0否 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 补充信息 1显示 0不显示
   */
    public showFiles?: number

  /**
   * 状态 1上架 0下架 数据库属性:int(11)
   */
    public status!: number

  /**
   * 库存 数据库属性:int(128)
   */
    public stockNum!: number

  /**
   * 是否显示库存 1是 2否 数据库属性:int(128)
   */
    public stockShow!: number

  /**
   * 是否使用跟进人活码 1是 0否
   */
    public useFollowLiveCode?: number

  /**
   * 摘要 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatText!: string

  /**
   * 封面图 在微信转发中显示 数据库属性:varchar(128)
   */
    public wechatThumbUrl!: string

}
