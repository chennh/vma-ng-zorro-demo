import CustomerParamDTO from './CustomerParamDTO'


export default class ContentViewLogPageBO {

  /**
   * 内容id 数据库属性:int(128)
   */
    public contentId!: number

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 用户头像
   */
    public customerAvator!: string

  /**
   * 地区
   */
    public customerCityName!: string

  /**
   * 用户id 数据库属性:int(128)
   */
    public customerId!: number

  /**
   * 用户名称
   */
    public customerName!: string

  /**
   * 填写记录-动态字段
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * 性别
   */
    public customerSex!: string

  /**
   * 性别id,通过标签获取
   */
    public customerSexId!: number

  /**
   * -1删除 0未知 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType!: number

  /**
   * 是否有权限加入客户池 true有 false没有
   */
    public hasLimit!: boolean

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 分享人id 数据库属性:int(128)
   */
    public staffId!: number

  /**
   * 分享人名称
   */
    public staffName!: string

  /**
   * 阅读类型 1文章2文件3表单4商品5名片6微小站  数据库属性:int(128)
   */
    public type!: number

  /**
   * 浏览页面数(仅微小站)
   */
    public viewPageCount!: number

  /**
   * 阅读时长 数据库属性:int(128)
   */
    public viewTimes!: number

}
