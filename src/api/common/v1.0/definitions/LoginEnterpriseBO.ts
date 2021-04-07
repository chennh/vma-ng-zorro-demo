

export default class LoginEnterpriseBO {

  /**
   * 企业地址
   */
    public address!: string

  /**
   * 人数规模
   */
    public channel!: string

  /**
   * 企业ID
   */
    public id!: number

  /**
   * 行业名称
   */
    public industry!: string

  /**
   * 是否绑定小程序 1是 0否
   */
    public isAppletsBound!: number

  /**
   * 企业信息是否完整 1是 0否
   */
    public isComplete!: number

  /**
   * 是否到期 1是 0否
   */
    public isOverdue!: number

  /**
   * 是否开启会话留存 1是 0否
   */
    public isRepliesKeep!: number

  /**
   * 是否绑定企业微信 1是 0否
   */
    public isWxBound!: number

  /**
   * 是否绑定公众号 1是 0否
   */
    public isWxPublicBound!: number

  /**
   * 企业名称
   */
    public name!: string

  /**
   * 过期时间
   */
    public overdueTime!: number

  /**
   * 平台ID
   */
    public platformId!: number

  /**
   * 服务商名称
   */
    public platformName!: string

  /**
   * 员工ID
   */
    public staffId!: number

  /**
   * 企业状态 -1不可用 0试用状态 1正常状态
   */
    public status!: number

  /**
   * 切换登录企业的时间
   */
    public switchTime!: number

}
