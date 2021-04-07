

export default class EnterpriseAuthorMiniPageBO {

  /**
   * 提交审核时间
   */
    public checkTime!: number

  /**
   * 企业Id
   */
    public enterpriseId!: number

  /**
   * 企业名称
   */
    public enterpriseName!: string

  /**
   * 异常信息
   */
    public errorMsg!: string

  /**
   * -
   */
    public id!: number

  /**
   * 是否企业 0否 1是
   */
    public isEnterprise!: number

  /**
   * 是否存在异常
   */
    public isError!: number

  /**
   * 小程序名称
   */
    public miniName!: string

  /**
   * 发布时间
   */
    public releaseTime!: number

  /**
   * 状态 0审核通过 1审核拒绝 2审核通过 3撤回
   */
    public status!: number

  /**
   * 版本信息
   */
    public userVersion!: string

}
