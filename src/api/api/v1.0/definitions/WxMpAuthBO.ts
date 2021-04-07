

export default class WxMpAuthBO {

  /**
   * 公众号头像
   */
    public headIcon!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 公众号名称
   */
    public name!: string

  /**
   * 0订阅号 1由历史老帐号升级后的订阅号 2服务号
   */
    public type!: number

  /**
   * 认证类型
   */
    public verifyType!: number

}
