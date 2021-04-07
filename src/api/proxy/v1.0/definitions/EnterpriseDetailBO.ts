

export default class EnterpriseDetailBO {

  /**
   * 详细地址
   */
    public address!: string

  /**
   * 区ID
   */
    public areaId!: number

  /**
   * 来源渠道 数据库属性:varchar(128)
   */
    public channel!: string

  /**
   * 来源渠道id
   */
    public channelId!: number

  /**
   * 城市ID
   */
    public cityId!: number

  /**
   * 城市名称
   */
    public cityName!: string

  /**
   * 企业名称
   */
    public enterpriseName!: string

  /**
   * 企业ID
   */
    public id!: number

  /**
   * 行业名称
   */
    public industry!: string

  /**
   * 行业id
   */
    public industryId!: number

  /**
   * 企业管理员手机号码
   */
    public mobilePhone!: string

  /**
   * 到期时间
   */
    public overdueTime!: number

  /**
   * 职位
   */
    public position!: string

  /**
   * 省ID
   */
    public provinceId!: number

  /**
   * 省份名称
   */
    public provinceName!: string

  /**
   * 备注
   */
    public remark!: string

  /**
   * 员工数 规模
   */
    public scale!: string

  /**
   * 员工数 规模Id
   */
    public scaleId!: number

  /**
   * 企业所有者名称
   */
    public staffName!: string

  /**
   * 工位数
   */
    public stationNum!: number

  /**
   * 状态 -2签约失败（审核不通过） -1申请未审核 0已通过（未签约） 1已签约
   */
    public status!: number

  /**
   * 使用年限
   */
    public yearLimit!: number

}
