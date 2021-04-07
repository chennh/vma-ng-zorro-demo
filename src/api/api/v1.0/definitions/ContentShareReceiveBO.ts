import CustomerParamDTO from './CustomerParamDTO'


export default class ContentShareReceiveBO {

  /**
   * 领取时间 数据库属性:datetime
   */
    public createTime!: string

  /**
   * 领取人id 数据库属性:int(128)
   */
    public customerId!: number

  /**
   * 领取人名称
   */
    public customerName!: string

  /**
   * 填写记录-动态字段
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * -1删除 0未知 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType!: string

  /**
   * -
   */
    public id!: number

  /**
   * 邀请人id 数据库属性:int(128)
   */
    public inviteCustomerId!: number

  /**
   * 邀请人名称
   */
    public inviteCustomerName!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 分享员工Id
   */
    public staffId!: number

  /**
   * 企业微信添加人
   */
    public staffName!: string

  /**
   * 有效性审核 审核状态 1通过 2未通过 0未审核
   */
    public status!: string

  /**
   * 是否显示审核按钮 1不显示 2显示
   */
    public taskType!: number

}
