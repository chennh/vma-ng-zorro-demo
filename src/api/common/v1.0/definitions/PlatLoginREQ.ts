

export default class PlatLoginREQ {

  /**
   * 账号
   */
    public account!: string

  /**
   * 验证码
   */
    public code!: string

  /**
   * 域名
   */
    public domain?: string

  /**
   * 验证码序号
   */
    public index!: string

  /**
   * 密码
   */
    public password!: string

  /**
   * 序号
   */
    public randomIndex!: string

  /**
   * 类型
   */
    public type!: number

}
