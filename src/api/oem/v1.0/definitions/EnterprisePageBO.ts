

export default class EnterprisePageBO {

  /**
   * 申请时间
   */
    public applyTime!: number

  /**
   * 城市名称
   */
    public cityName!: string

  /**
   * 企业名称
   */
    public enterpriseName!: string

  /**
   * ID编号
   */
    public id!: number

  /**
   * 是否到期
   */
    public isOverdue!: number

  /**
   * 到期时间
   */
    public overdueTime!: number

  /**
   * 企业所有者
   */
    public ownerName!: string

  /**
   * 电话
   */
    public ownerPhone!: string

  /**
   * 省份名称
   */
    public provinceName!: string

  /**
   * 最近登录时间
   */
    public recentLoginTime!: number

  /**
   * 剩余工位数
   */
    public remainStation!: number

  /**
   * 员工数 规模
   */
    public scale!: string

  /**
   * 工位数
   */
    public stationNum!: number

  /**
   * 状态 -2签约失败（审核不通过） -1申请未审核 0试用（未签约） 1已签约
   */
    public status!: number

  /**
   * 剩余工位数
   */
    public useStation!: number

}
