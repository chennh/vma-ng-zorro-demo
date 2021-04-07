

export default class LoginREQ {

  /**
   * 验证码
   */
    public code?: string

  /**
   * -
   */
    public domain?: string

  /**
   * 唯一索引，校验时传回
   */
    public index?: string

  /**
   * 登录类型 1短信登录 2密码登录 （null 默认短信登录）
   */
    public loginType?: number

  /**
   * 手机号码
   */
    public mobile?: string

  /**
   * 密码
   */
    public password!: string

  /**
   * 序号
   */
    public randomIndex!: string

}
